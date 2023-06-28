import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {RiDashboardFill, RiDashboard3Line, RiCheckboxBlankCircleFill } from "react-icons/ri"
import {FcSettings} from "react-icons/fc"
import {TfiMenuAlt} from "react-icons/tfi"
import {CgProfile} from "react-icons/cg"
import {FcFile} from "react-icons/fc"
import {FcTodoList} from "react-icons/fc"
import firebaseApp from "../firebase";
import {getAuth, signOut, onAuthStateChanged} from "firebase/auth"
import { Link, NavLink, Router } from "react-router-dom";
import {MdNotificationsActive} from "react-icons/md"
import { Button, IconButton } from "@material-tailwind/react";
import {useAuth} from "../context/authContext";


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
        await logout();
        navigate("/");
    };
    if (loading) return <button type="button" class="bg-indigo-500 ... justify-center items-center flex absolute text-lg" disabled>
    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      
    </svg>
    Processing...
  </button>

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
                        <a href="#"
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><RiDashboard3Line/>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <Link to="./Perfil"
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><CgProfile/>
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <a href="#" 
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><FcFile/>
                            Historial
                        </a>
                    </li>
                    <li>
                        <a href="#" 
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><FcTodoList/>
                            Solicitud de Servicios 
                        </a>
                    </li>
                    <li>
                        <a href="#" 
                        className="text-xl flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><FcSettings/>
                            Ajustes
                        </a>
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
            <header className="fixed left-0 top-0 w-full p-6 flex justify-end  bg-sky-700 rounded-br-3xl">
                
                    <ul className=" flex items-center gap-3">

                     <div className="ring-1 ring-sky-500 relative inline-flex items-center justify-center w-12 h-12 overflow-hidden object-cover bg-gray-100 rounded-full dark:bg-gray-400">EO</div>
                        <span className="font-medium text-gray-600 dark:text-gray-300">{user.email}</span> 
                
                        <li>
                            <IconButton className=" text-sky-200  text-xl px-4 rounded-full bg-transparent ring-1 ring-sky-600  "><MdNotificationsActive/></IconButton>
                            <RiCheckboxBlankCircleFill className="text-orange-600 text-[12px] absolute top-[24px] right-6"/> 
                        </li>              

               

                    </ul>          
            </header>
            {/*Main Content*/}
           
            <div className="pt-28">
                <h1 className="text-4xl tex-sky-400 mb-10 "></h1>
                {/*Home content*/}
            </div>
        </main>
        
        </div>
        
        </>
    );
}