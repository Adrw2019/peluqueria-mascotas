import React, { useState, useEffect } from 'react';

function TipoProductoForm({ tipoProductoInicial, onSave }) {
  const [codigo, setCodigo] = useState(tipoProductoInicial ? tipoProductoInicial.codigo : '');
  const [nombre, setNombre] = useState(tipoProductoInicial ? tipoProductoInicial.nombre : '');

  useEffect(() => {
    if (tipoProductoInicial) {
      setCodigo(tipoProductoInicial.codigo);
      setNombre(tipoProductoInicial.nombre);
    }
  }, [tipoProductoInicial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tipoProductoData = { codigo, nombre };
    onSave(tipoProductoData);
    setCodigo('');
    setNombre('');
  };

  return (
    <div className="container">
      <h2>{tipoProductoInicial ? "Editar Tipo de Producto" : "Crear Tipo de Producto"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Código:</label>
          <input
            type="text"
            className="form-control"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
            disabled={!!tipoProductoInicial}  />
        </div>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {tipoProductoInicial ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
}

export default TipoProductoForm;
