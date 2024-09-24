import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TipoProductoList({ onEdit, onDelete }) {
  const [tiposProducto, setTiposProducto] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tipo-productos/')
      .then(response => setTiposProducto(response.data))
      .catch(error => console.error("Error fetching TipoProductos: ", error));
  }, []);

  return (
    <div className="container">
      <h2>Lista de Tipos de Producto</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tiposProducto.map(tipo => (
            <tr key={tipo.id_tipoproducto}>
              <td>{tipo.id_tipoproducto}</td>
              <td>{tipo.nombre}</td>
              <td>
                <button className="btn btn-warning" onClick={() => onEdit(tipo)}>Editar</button>
                <button className="btn btn-danger" onClick={() => onDelete(tipo.id_tipoproducto)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TipoProductoList;
