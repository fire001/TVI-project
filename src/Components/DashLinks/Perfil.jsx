import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {RiDashboardFill, RiDashboard3Line, RiCheckboxBlankCircleFill } from "react-icons/ri"
import {FcSettings} from "react-icons/fc"
import {TfiMenuAlt} from "react-icons/tfi"
import {CgProfile} from "react-icons/cg"
import {FcFile, FcCalendar} from "react-icons/fc"
import {FcTodoList} from "react-icons/fc"
import firebaseApp from "../../firebase";
import {getAuth, signOut, onAuthStateChanged} from "firebase/auth"
import { Link, NavLink, Router } from "react-router-dom";
import {MdNotificationsActive} from "react-icons/md"
import { Button, IconButton, button } from "@material-tailwind/react";
import {useAuth} from "../../context/authContext";
import { Spinner } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore';

const auth = getAuth();
const db = getFirestore();
export default function Perfil() {

  const profile = {
    nombre:'',
    direccion:'',
    phone:'',
    cedula:'',
    vehiculo:'',
    matricula:'',
  }
  const [usuario, setUsuario] = useState(profile)

  const captInputs  = (e) =>{
    const {name, value} = e.target;
    setUsuario({...usuario, [name]:value})
  }

  const guardarDatos = async(e) =>{
    e.preventDefault();
    try {
      await addDoc(collection())
    }catch(error){
      console.log(error);
    }
    setUsuario({...profile})
  }


  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow =() => setShowModal(true);

  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () =>{
      setShowMenu(!showMenu && !activeMenu);
  };
  const toDashboard = () => {
    let Dashboard = "/Dashboard";
    navigate(Dashboard);
   };

  const {user, logout, loading} = useAuth();
  const handleLogout = async () => {
      await logout();
      navigate("/");
  };
  if (loading) return <Spinner type="button" class="text-blue-500/10 ... justify-center items-center flex relative text-lg" >
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    
  </svg>
  Processing...
</Spinner>

    return (
        <>
        <div className=" bg-sky-700 rounded-br-3xl">
            {/*Sidebar*/}
        <sidebar 
        className={`fixed  p-4 bg-opacity-80 bg-sky-900 rounded-tr-3xl rounded-br-3xl ${showMenu ? "-left-0": "-left-full"} lg:left-0 h-full w-72 flex flex-col transition-all duration-300 overflow-y-scroll-hidden z-50`}>
            {/*Nenu*/}
        <div>
            {/*Logo*/}
            <div className="mb-12 text-center">
                <h2 type="button" className="text-white font-bold tracking-[2px] mt-4 "onClick={toDashboard}>Car Trac</h2>
            </div>
        </div>
        {/*nav*/}
        <nav>
        <ul>
        <li>
                        <Link to="/Dashboard"
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><RiDashboard3Line/>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/Perfil"
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><CgProfile/>
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <Link to="/Historial" 
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><FcFile/>
                            Historial
                        </Link>
                    </li>
                    <li>
                        <Link to="/SolicitudServicios" 
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><FcTodoList/>
                            Solicitud de Servicios 
                        </Link>
                    </li>
                    <li>
                        <Link to="/Cita" 
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><FcCalendar/>
                            Haz tu Cita
                        </Link>
                    </li>
                    <div className="flex items-center w-full my-10">
                    <hr className="w-full text-white"/>
                
                </div>
                <li>
                        <a href="#" 
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline" onClick={handleLogout}><RiDashboardFill/>
                            Cerrar Sesion
                        </a>
                    </li>
                </ul>
        </nav> 
        </sidebar>
        {/*Btn menu mobile*/}
        <button className ={`fixed text-3xl text-sky-300 mt-3 rounded-full ${showMenu ? "left-60": "left-1"} lg:hidden transition-all duration-300 z-50`} onClick={toggleMenu}><TfiMenuAlt/></button>
        {/*Content*/}
        <main className="lg:pl-80">
            {/*Header*/}
            <header className="z-10 fixed left-0 top-0 w-full p-6 flex justify-end  bg-sky-700 rounded-br-3xl">
                
                    <ul className=" flex items-center gap-3">

                     <div className="ring-1 ring-sky-300 relative inline-flex items-center justify-center w-12 h-12 overflow-hidden object-cover bg-gray-100 rounded-full dark:bg-gray-400">{user.displayName}</div>
                        <span className="font-medium text-gray-600 dark:text-gray-300">{user.email}</span> 
                
                        <li>
                            <IconButton className=" text-sky-200  text-xl px-4 rounded-full bg-transparent ring-1 ring-sky-600"><MdNotificationsActive/></IconButton>
                            <RiCheckboxBlankCircleFill className="text-orange-600 text-[12px] absolute top-[24px] right-6"/> 
                        </li>              

               

                    </ul>          
            </header>
            {/*Main Content*/}
           
            <div className="flex pt-28 lg:ml-72 sm:justify-center ">
                
                {/*Home content*/}
            </div>
        </main>
        
        </div>

        {/*Perfil*/}
    
    {/*Edit*/}
      <button type="button" className="text-xl flex right-12 font-semibold p-1 justify-end items-end absolute sm:scroll-y-auto mt-2 rounded shadow-lg ring-1 shadow-sky-500 text-white hover:bg-sky-300 bg-sky-400" onClick={handleShow}>Editar
      </button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Mi Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
          className="w-full p-8 m-auto bg-white-400 rounded-md shadow-md shadow-slate-700/60 ring ring-gray-100 lg:max-w-xl" onSubmit={guardarDatos} 
          >
            <div className="mb-2">
            <label htmlFor="name"
                        className="block text-sky-900 text-md font-bold mb-2"
                        >
                           Nombre(s)
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={captInputs} value={usuario.name}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            
                            </input>
                        </div>
                    </div>

          <div className="mb-2">
              <label htmlFor="name"
                className="block text-sky-900 text-md font-bold mb-2"
                    >
                  Apellido(s)
              </label>
              <div className="flex flex-col items-start">
              <input
              type="text"
              name="lastname"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last Name" 
                  >

                </input>
              </div>

              <div className="mb-2">
                <label htmlFor="name"
                className="block text-sky-900 text-md font-bold mb-2"
                    >
                  Direccion
                </label>
                 <div className="flex flex-col items-start">
                   <input
                   type="text"
                   name="direccion"
                   onChange={captInputs} value={usuario.direccion}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   placeholder="" 
                   >

                  </input>
                </div>
              </div>
              
              <div className="mb-2">
                <label htmlFor="name"
                className="block text-sky-900 text-md font-bold mb-2"
                    >
                  Telefono
                </label>
                 <div className="flex flex-col items-start">
                   <input
                   type="tel"
                   name="phone"
                   onChange={captInputs} value={usuario.phone}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   placeholder="" 
                   >

                  </input>
                </div>
              </div>

              <label
                htmlFor="email"
                className="block text-sky-900 text-md font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="example@example.com"
              />
            </div>
            
            <div className="mb-2">
              <label htmlFor="name"
                className="block text-sky-900 text-md font-bold mb-2"
                    >
                  Vehículo
              </label>
              <div className="flex flex-col items-start">
              <input
              type="text"
              name="vehiculo"
              onChange={captInputs} value={usuario.vehiculo}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="" 
                  >

                </input>
              </div>
              </div>

              <div className="mb-2">
              <label htmlFor="name"
                className="block text-sky-900 text-md font-bold mb-2"
                    >
                  Matricula
              </label>
              <div className="flex flex-col items-start">
              <input
              type="text"
              name="matricula"
              onChange={captInputs} value={usuario.matricula}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="X-xxxxxx" 
                  >

                </input>
              </div>
              </div>
        

          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="text-xl font-semibold sm:scroll-y-auto p-1 rounded shadow-lg ring-1 shadow-orange-500 text-white hover:bg-gray-300 bg-gray-400" onClick={handleClose}>
            Cerrar
          </button>
          <button type="button" className="text-xl font-semibold sm:scroll-y-auto p-1 rounded shadow-lg ring-1 shadow-orange-500 text-white hover:bg-sky-300 bg-sky-400" onClick={handleClose}>
            Guardar Cambios
          </button>
          </Modal.Footer>
      </Modal>

      {/*Perfil*/}
 
     <div className="lg:flex flex-col lg:justify-center lg:items-center relative sm:scroll-auto mt-4  ">
  <div class="px-4 sm:justify-center">
    <h3 class="font-semibold leading-7 text-gray-900 text-xl ">Mi Perfil</h3>
    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500"></p>
  </div>
  <div class="mt-6 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Nombre(s)</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.displayName || usuario.name}</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">ID</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.uid}</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Direccion</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{usuario.direccion}</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Telefonos</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{usuario.phone}</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Cedula</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">xxx-xxxxxx-x</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Monto a saldar</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$0</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Vehículo(s)</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{usuario.vehiculo}</dd>
        <dt class="text-sm font-medium leading-6 text-gray-900">Matricula</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">A-xxxxxx{usuario.matricula}</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Historial de mantenimientos</dt>
        <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul class="divide-y divide-gray-100 rounded-md border border-gray-200">
            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div class="flex w-0 flex-1 items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <div class="ml-4 flex min-w-0 flex-1 gap-2">
                  <span class="truncate font-medium">Kia_sorento_2017_mant1.pdf</span>
                  <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                </div>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div class="flex w-0 flex-1 items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <div class="ml-4 flex min-w-0 flex-1 gap-2">
                  <span class="truncate font-medium">Kia_sorento_2017_mant2.pdf</span>
                  <span class="flex-shrink-0 text-gray-400">4.5mb</span>
                </div>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>
      
    </> 
    );
}