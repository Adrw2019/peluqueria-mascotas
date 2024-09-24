import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente de ruta protegida
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('access_token');

    return token ? children : <Navigate to="/" replace />;
};
export default PrivateRoute;