import React, { useState } from 'react';
import axios from 'axios';
import TipoProductoList from './TipoProductoList';
import TipoProductoForm from './TipoProductoForm';

function TipoProductoCRUD() {
  const [tipoProductoEdit, setTipoProductoEdit] = useState(null);

  const handleSave = (tipoProductoData) => {
    if (tipoProductoEdit) {
      // Actualizar TipoProducto
      axios.put(`/api/tipoproductos/${tipoProductoData.id_tipoproducto}/`, tipoProductoData)
        .then(response => {
          console.log("Tipo de Producto actualizado", response.data);
          setTipoProductoEdit(null);  // Reset form
        })
        .catch(error => console.error("Error al actualizar TipoProducto: ", error));
    } else {
      // Crear nuevo TipoProducto
      axios.post('http://127.0.0.1:8000/api/tipo-productos/', tipoProductoData)
        .then(response => {
          console.log("Nuevo Tipo de Producto creado", response.data);
        })
        .catch(error => console.error("Error al crear TipoProducto: ", error));
    }
  };

  const handleEdit = (tipoProducto) => {
    setTipoProductoEdit(tipoProducto);  // Cargar los datos en el formulario para editar
  };

  const handleDelete = (id_tipoproducto) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este Tipo de Producto?")) {
      axios.delete(`/api/tipoproductos/${id_tipoproducto}/`)
        .then(response => {
          console.log("Tipo de Producto eliminado");
        })
        .catch(error => console.error("Error al eliminar TipoProducto: ", error));
    }
  };

  return (
    <div>
      <TipoProductoForm tipoProductoInicial={tipoProductoEdit} onSave={handleSave} />
      <TipoProductoList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default TipoProductoCRUD;
