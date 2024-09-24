import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { useLocation } from 'react-router-dom'; // Importar useLocation

const MisCitas = () => {
    const [citas, setCitas] = useState([]);
    const API_URL = 'http://127.0.0.1:8000/api';
    const navigate = useNavigate(); // Usar el hook useNavigate
    const location = useLocation(); // Usar el hook useLocation

    useEffect(() => {
        const fetchCitas = async () => {
            const token = localStorage.getItem('access_token');
            try {
                const response = await axios.get(`${API_URL}/citas/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCitas(response.data);
                console.log('Citas obtenidas:', response.data); // Agrega esto
            } catch (error) {
                console.error('Error al obtener citas:', error);
            }
        };

        fetchCitas();
    }, [location.state]);

    // Función para manejar el click del botón y volver al dashboard
    const handleBackToDashboard = () => {
        navigate('/client-dashboard'); // Redirige al dashboard del cliente
    };

    return (
        <div className="container">
            <h2>Mis Citas</h2>
            <ul>
                {citas.length === 0 ? (
                    <li>No tienes citas agendadas.</li>
                ) : (
                    citas.map(cita => (
                        <li key={cita.id}>
                            {cita.Fecha} - {cita.Servicio} - {cita.Nombre_mascota}
                        </li>
                    ))
                )}
            </ul>
            {/* Botón para volver al dashboard */}
            <button className="btn btn-secondary mt-3" onClick={handleBackToDashboard}>
                Volver
            </button>
        </div>
    );
};

export default MisCitas;
