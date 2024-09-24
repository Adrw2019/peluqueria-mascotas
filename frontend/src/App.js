import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import ClienteDashboard from './components/ClienteDashboard';
import Registro from './components/registro';
import AgendarCita from './components/AgendarCita';
import MisCitas from './components/MisCitas';
import TiendaAccesorios from './components/TiendaAccesorios';
import TipoProductoCRUD from './components/TipoProducto/TipoProductoCRUD';
import DefaultPage from './components/DefaultPage';
import './App.css';
import perritoImg from './assets/perrito.webp'; // Ruta al archivo de imagen de perrito
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #15c76b;
  color: white;
  padding: 1rem;
  display: block;
  align-items: center;
  justify-content: ;
  position: relative;
  text-align: center;
  background-image: url(${props => props.bgImage});
  background-repeat: repeat;
  background-size: 100px 100px;
`;

const Main = styled.main`
  padding: 2rem 0;
  text-align: center;
`;

const PetImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin: 1rem auto;
  background: url(${perritoImg}) no-repeat center center;
  background-size: cover;
`;

const Navbar = styled.nav`
  background-color: #f8f9fa;
  .navbar-brand {
    color: #494a4c;
  }
  .navbar-nav .nav-link {
    color: #007bff!important;
  }
  .navbar-nav .nav-link:hover {
    color: #0056b3;
  }
`;

const App = () => {
    return (
        <Router>
            <div className="">
                <Header>
                    <PetImage />
                    <h1><Link className="navbar-brand" to="/">Peluqueria de Mascotas</Link></h1>
                </Header>
                <Navbar className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Home</Link>
                                </li>
                                <span className="nav-separator p-2">/</span> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <span className="nav-separator p-2">/</span> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/registro">Registro</Link>
                                </li>
                                <span className="nav-separator p-2">/</span> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/agendar-cita">Agendar Cita</Link>
                                </li>
                                <span className="nav-separator p-2">/</span> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tienda-accesorios">Tienda de Accesorios</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Navbar>
                <Main>
                    <Routes>
                        <Route path="/" element={<DefaultPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/agendar-cita" element={<AgendarCita />} />
                        <Route path="/mis-citas" element={<MisCitas />} />
                        <Route path="/tienda-accesorios" element={<TiendaAccesorios />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/client-dashboard" element={<ClienteDashboard />} />
                        <Route path="/productos" element={<productos />} />
                        <Route path="/tipoproductos" element={<TipoProductoCRUD />} />
                    </Routes>
                </Main>
            </div>
        </Router>
    );
};

export default App;
