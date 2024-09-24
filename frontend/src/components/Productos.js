import React,{useEffect, useState} from 'react';
import axios from 'axios';


const ComponenteProductos = () => {
    //const url='http://localhost:8000/api/productos';
    const url='http://127.0.0.1:8000/api/productos';
    

    const [products,setProducts]= useState([]);
    const [id,setId]= useState('');
    const [nombre,setName]= useState('');
    const [cantidad,setStock]= useState('');
    const [precio,setPrice]= useState('');
    const [operation,setOperation]= useState(1);
    const [title,setTitle]= useState('');
    const [count, setCount] = useState(0); 
    

  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-md-4 offset-md-4'>
                    <div className='d-grid mx-auto'>
                    productos
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComponenteProductos