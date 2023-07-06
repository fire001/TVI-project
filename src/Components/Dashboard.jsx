import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {RiDashboardFill, RiDashboard3Line, RiCheckboxBlankCircleFill } from "react-icons/ri"
import {FcSettings} from "react-icons/fc"
import {TfiMenuAlt} from "react-icons/tfi"
import {CgProfile} from "react-icons/cg"
import {FcFile, FcCalendar} from "react-icons/fc"
import {FcTodoList} from "react-icons/fc"
import firebaseApp from "../firebase";
import {getAuth, signOut, onAuthStateChanged} from "firebase/auth"
import { Link, NavLink, Router } from "react-router-dom";
import {MdNotificationsActive} from "react-icons/md"
import { Button, IconButton } from "@material-tailwind/react";
import {useAuth} from "../context/authContext";
import { Spinner } from 'react-bootstrap';


const auth = getAuth();



export default function Dashboard(){
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () =>{
        setShowMenu(!showMenu && !activeMenu);
        
    }
    
    const {user, logout, loading} = useAuth();

    const handleLogout = async () => {
        try{
            await logout();
            navigate("/");
    }
    catch(error){
        console.log(error);
    }
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
                <h2 className="text-white font-bold tracking-[2px] mt-4 ">Car Trac</h2>
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
                            Haz tu cita
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
        <main className="lg:pl-80 ">
            {/*Header*/}
            <header className="fixed left-0 top-0 w-full p-6 flex justify-end  bg-sky-700 rounded-br-3xl">
                
                    <ul className=" flex items-center gap-3">

                     <div className=" sm:justify-center ring-1 ring-green-500 relative inline-flex items-center justify-center hover:shadow-xl shadow-green-600 w-12 h-12 overflow-hidden object-cover bg-gray-100 rounded-full bg-auto font-bold text-uppercase text-sky-700 text-2xl">{user.displayName}</div>
                        <span className="font-medium text-gray-600 dark:text-gray-300">{user.email}</span> 
                
                        <li>
                            <IconButton className=" text-sky-200  text-xl px-4 rounded-full bg-transparent ring-1 ring-sky-600  "><MdNotificationsActive/></IconButton>
                            <RiCheckboxBlankCircleFill className="text-orange-600 text-[12px] absolute top-[24px] right-6"/> 
                        </li>              

               

                    </ul>          
            </header>
            {/*Main Content*/}
           
           
        </main>
       
        
        </div>
        <div className="bg-gray-100 h-screen w-full ">
        <div className="flex pt-28 lg:ml-72 sm:justify-center">
                <h1 className="text-2xl text-sky-700 ">Bienvenido: {user.displayName || user.email}</h1>
                {/*Home content*/}
            </div>
            </div>
        </>
    );
}
