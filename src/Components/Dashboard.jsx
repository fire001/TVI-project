
import React from "react";
import {RiDashboardFill, RiDashboard3Line, RiSettings5Line} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"
import {AiOutlineTool} from "react-icons/ai"
import {MdOutlineNotificationsActive} from "react-icons/md"
import firebaseApp from "../firebase";
import {getAuth, signOut} from "firebase/auth"

const auth = getAuth(firebaseApp);

export default function Dashboard(){
    return (
        <>
        <div className="min-h-screen grid grid-cols-6 bg-sky-600">
        <div className="col-span-1 p-8 bg-opacity-80 bg-gray-700 rounded-tr-3xl rounded-br-3xl">
            {/*Logo*/}
            <div className="text-center p-8 text-sky-600">
                <h1 className=" font-bold">TVI</h1>
            </div>
            {/*Menu*/}
            <nav>
                <ul>
                    <li>
                        <a href="#" 
                        className="flex items-center gap-3 bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><RiDashboard3Line/>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" 
                        className="flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><CgProfile/>
                            Perfil
                        </a>
                    </li>
                    <li>
                        <a href="#" 
                        className="flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><AiOutlineTool/>
                            Mantenimientos
                        </a>
                    </li>
                    <li>
                        <a href="#" 
                        className="flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><MdOutlineNotificationsActive/>
                            Notificaciones
                        </a>
                    </li>
                    <li>
                        <a href="#" 
                        className="flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline"><RiSettings5Line/>
                            Ajustes
                        </a>
                    </li>
                    <div className="flex items-center w-full my-10">
                    <hr className="w-full text-white"/>
                
                </div>
                    <li>
                        <a href="#" 
                        className="flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold no-underline" onClick={()=> signOut(auth)}><RiDashboardFill/>
                            Sign Out
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className=" col-span-5">My Dashboard</div>
        </div>
        </>
    )
}