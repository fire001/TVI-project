
import React from "react";
import {RiDashboardFill} from "react-icons/ri"
export default function Dashboard(){
    return (
        <>
        <div className="min-h-screen grid grid-cols-6">
        <div className="col-span-1 p-8 bg-gray-700 rounded-tr-3xl rounded-br-3xl">
            {/*Logo*/}
            <div className="text-center p-8 text-sky-600">
                <h1 className=" font-bold">TVI</h1>
            </div>
            {/*Menu*/}
            <nav>
                <ul>
                    <li>
                        <a href="#" 
                        className="flex items-center gap-3 bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold"><RiDashboardFill/>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" 
                        className="flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold"><RiDashboardFill/>
                            Perfil
                        </a>
                    </li>
                    <li>
                        <a href="#" 
                        className="flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold"><RiDashboardFill/>
                            Mantenimiento
                        </a>
                    </li>
                    <li>
                        <a href="#" 
                        className="flex items-center gap-3 hover:bg-gradient-to-r from-sky-500 to-sky-700  p-3 mt-4 text-white rounded-full transition-colors font-semibold"><RiDashboardFill/>
                            Ajustes
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="col-span-5">hola mundo</div>
        </div>
        </>
    )
}