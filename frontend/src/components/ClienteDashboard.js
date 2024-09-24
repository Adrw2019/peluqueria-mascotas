import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Nav } from 'react-bootstrap';

const ClienteDashboard = ({ token }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [productos, setProductos] = useState([]);
    const [citas, setCitas] = useState([]);
    const navigate = useNavigate();
    const API_URL = 'http://127.0.0.1:8000/api';

    // Obtener productos
    useEffect(() => {
        const fetchProductos = async () => {
            const token = localStorage.getItem('access_token');
            try {
                const response = await axios.get(`${API_URL}/productos/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setProductos(response.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchProductos();
    }, []);

    // Obtener información del usuario
    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('access_token');
            try {
                const response = await axios.get(`${API_URL}/current-user/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error al obtener información del usuario:', error);
            }
        };

        fetchUserInfo();
    }, []);

    // Obtener citas del usuario
    useEffect(() => {
        const fetchCitas = async () => {
            const token = localStorage.getItem('access_token');
            try {
                if (userInfo) {
                    const response = await axios.get(`${API_URL}/citas/`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setCitas(response.data);
                }
            } catch (error) {
                console.error('Error al obtener las citas:', error);
            }
        };

        fetchCitas();
    }, [userInfo]);

    

    // Manejar el cierre de sesión
    const handleLogout = async () => {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');

        if (!refreshToken || !accessToken) {
            navigate('/', { replace: true });
            return;
        }

        try {
            await axios.post(`${API_URL}/logout/`, {
                refresh_token: refreshToken,
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            navigate('/', { replace: true });
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            navigate('/', { replace: true });
        }
    };

    if (!userInfo) {
        return <div>Cargando información del usuario...</div>;
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar bg="light" expand="lg" className="col-md-2 d-md-block sidebar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-column">
                            <h4 className="sidebar-heading">Menú</h4>
                            <Nav.Link onClick={() => navigate('/agendar-cita')}>Agendar Cita</Nav.Link>
                            <Nav.Link onClick={() => navigate('/tienda-accesorios')}>Tienda de Accesorios</Nav.Link>
                            <Nav.Link onClick={() => navigate('/mis-citas')}>Mis Citas</Nav.Link>
                            <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-4">
                    <h3>Dashboard</h3>
                    <div>
                        <h2>Bienvenido, {userInfo.nombre} {userInfo.apellido}</h2>
                        <p>Username: {userInfo.username}</p>
                        <p>Estado: {userInfo.estado ? 'Activo' : 'Inactivo'}</p>
                    </div>
                    <h4>Productos Disponibles</h4>
                    <ul>
                        {productos.map(producto => (
                            <li key={producto.id}>{producto.nombre} - {producto.precio}</li>
                        ))}
                    </ul>
                    <h4>Mis Citas</h4>
                    <ul>
                        {citas.map(cita => (
                            <li key={cita.id}>
                                {cita.Nombre_mascota} - {cita.Fecha}
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </div>
    );
};

export default ClienteDashboard;

