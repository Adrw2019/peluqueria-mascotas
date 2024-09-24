import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

function TiendaAccesorios() {
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate(); // Usar el hook useNavigate

    // Simulación de productos
    useEffect(() => {
        const productosSimulados = Array.from({ length: 10 }, (_, index) => ({
            id: index + 1,
            nombre: `Accesorio ${index + 1}`,
            descripcion: `Descripción del accesorio ${index + 1}`,
            precio: (Math.random() * 100).toFixed(2)
        }));

        setProductos(productosSimulados);
    }, []);

    // Llamado normal a la API
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/productos/')
    //         .then(response => {
    //             setProductos(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error al obtener productos:', error);
    //         });
    // }, []);

    // Función para manejar el click del botón y volver al dashboard
    const handleBackToDashboard = () => {
        navigate('/client-dashboard'); // Redirige al dashboard del cliente
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Tienda de Accesorios</h2>
            <div className="row">
                {productos.map((producto) => (
                    <div className="col-md-4 mb-4" key={producto.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p className="card-text"><strong>${producto.precio}</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Botón para volver al dashboard */}
            <button className="btn btn-secondary mt-3" onClick={handleBackToDashboard}>
                Volver
            </button>
        </div>
    );
}

export default TiendaAccesorios;
