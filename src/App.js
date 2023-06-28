

import "./index.css";


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import AboutUs from './Components/Navbar/AboutUs';
import AgendarCitas from './Components/Navbar/AgendarCitas';
import TalleresAsociados from './Components/Navbar/TalleresAsociados';
import NuestrosServicios from './Components/Navbar/NuestrosServicios';
import Perfil from './Components/DashLinks/Perfil';

import Cita from './Components/DashLinks/Cita';
import Historial from './Components/DashLinks/Historial';
import SolicitudServicios from './Components/DashLinks/SolicitudServicios';
import {AuthProvider} from './context/authContext'
import { ProtectedRoute } from "./Components/ProtectedRoute";
function App() {



  return (
    <BrowserRouter>  
    <AuthProvider>
    <Routes>
        <Route>
        <Route path="/"element={<HomePage />}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="/AgendarCitas" element={<AgendarCitas/>}/>
        <Route path="/TalleresAsociados" element={<TalleresAsociados/>}/>
        <Route path="/NuestrosServicios" element={<NuestrosServicios/>}/>
        <Route path="/Perfil" element={<ProtectedRoute><Perfil/></ProtectedRoute>}/>
        <Route path="/Cita" element={<Cita/>}/>
        <Route path="/Historial" element={<Historial/>}/>
        <Route path="/SolicitudServicios" element={<SolicitudServicios/>}/>
      </Route>   
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
