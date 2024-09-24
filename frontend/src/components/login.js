import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import axios from 'axios';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Inicializar el hook useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!username || !password) {
            setError('Por favor completa todos los campos');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/token/', {
                username,
                password
            }, {
                headers: {
                    'X-CSRFToken': Cookies.get('csrftoken') // Agregar el token CSRF
                }
            });

            if (response.status === 200) {
                console.log('Login exitoso:', response.data);

                // Guardar los tokens en localStorage
                localStorage.setItem('userId', response.data.userId); // Asume que el ID del usuario está en response.data.userId
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);

                // Redirigir al dashboard
                navigate('/dashboard');
            } else {
                setError('Credenciales incorrectas');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Credenciales incorrectas');
            } else {
                setError('Error en la conexión con el servidor');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="mb-3">
                    <label className="form-label">Nombre de usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Cargando...' : 'Login'}
                </button>
            </form>
            {error && <p className="text-danger mt-3">{error}</p>}
        </div>
    );
};

export default Login;


