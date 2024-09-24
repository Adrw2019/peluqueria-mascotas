import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = ({ token }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();
    const API_URL = 'http://127.0.0.1:8000/api'; // Cambia la URL según tu configuración

    // Obtener productos
    useEffect(() => {
        const fetchProductos = async () => {
            const token = localStorage.getItem('access_token');
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/productos/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setProductos(response.data);
            } catch (error) {
                console.error('Hubo un error al obtener los productos:', error);
            }
        };

        fetchProductos();
    }, [token]);

    // Obtener información del usuario
    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('access_token');
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/current-user/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();
    }, [token]);

    useEffect(() => {
        if (userInfo) {
            if (!userInfo.is_superuser && !userInfo.is_employee) {
                navigate('/client-dashboard');
            }
        }
    }, [userInfo, navigate]);

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
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <h4 className="sidebar-heading">Menú</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => navigate('/tipoproductos')}>
                                    Gestionar tipos de productos
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => navigate('/productos')}>
                                    Gestionar Productos
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={handleLogout}>
                                    Cerrar Sesión
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>

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
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
