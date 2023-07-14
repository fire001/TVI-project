import React, {useState, useEffect} from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {auth} from '../firebase';
import { Button} from "@material-tailwind/react";
import {useAuth} from '../context/authContext';
import { Alert } from "./Alert";


export default function Register(){
   
    const { signup } = useAuth();

  
   

    const [user, setUser] = useState({
      email: "",
      password: "",
      
    });
  
    const [error, setError] = useState();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await signup(user.email, user.password);
        navigate("/LoginPage");
      } catch (error) {
        console.log(error.code, error.message);
        if (error.code === "auth/email-already-in-use") {
                  setError("Este email ya esta en uso")
                }else
                if (error.code === "auth/internal-error"){
                  setError("Correo invalido")
                }else if
                 (error.code === "auth/invalid-email") {
                  setError("Correo invalido")
                }
                else if (error.code === "auth/invalid-password") {
                  setError("Contraseña invalida")
                }
                else if (error.code === "auth/user-not-found") {
                  setError("Usuario no encontrado")
                }   
      }
    };
    return (
      <div className="top-0 left-0 h-full w-full relative flex justify-center min-h-screen overflow-hidden bg-center bg-cover bg-no-repeat bg-[url('https://wallpaperaccess.com/full/4028171.jpg')]">
        
         <div className="w-full max-w-xs mt-44 text-orange justify-center items-center ">
          {error && <Alert message={error} />}
        </div>
          <form
            onSubmit={handleSubmit}
            className=" absolute bottom-28 flex flex-col w-full p-6 m-auto bg-opacity-80 bg-gray-400 rounded-md shadow-xl shadow-slate-700/60 ring ring-gray-400 lg:max-w-xl"
          >
            <div className="mb-2">
            <label htmlFor="name"
                        className="block text-sky-900 text-md font-bold mb-2"
                        >
                           Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                            type="text"
                            name="name"
                         
                            placeholder="Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            
                            </input>
                        </div>
                    </div>

          <div className="mb-2">
              <label htmlFor="name"
                className="block text-sky-900 text-md font-bold mb-2"
                    >
                  Last Name
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

              <label
                htmlFor="email"
                className="block text-sky-900 text-md font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="example@example.com"
              />
            </div>
    
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sky-900 text-md font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="*************"
              />
            </div>

            
         
         
            <button className="flex items-center justify-center uppercase transition-colors duration-200 transform 
                    bg-sky-700 hover:bg-sky-600 focus:outline-none 
                    focus:bg-sky-600 text-white font-bold py-2 px-8 rounded-lg focus:shadow-outline">
              Registrar
            </button>
         
          <p className="my-4 text-md flex justify-between px-24">
            Ya tienes una cuenta?
            <Link to="/LoginPage" className=" no-underline text-blue-700 hover:text-blue-900">
              Login
            </Link>
          </p>
          <div className="flex items-center w-full my-4">
                    <hr className="w-full"/>
                    <p className="px-3">OR</p>
                    <hr className="w-full"/>
                </div>
                <div className="my-6 space-y-2">
                    <Button aria-label="login with Google"
                    type="button"
                    className="flex items-center justify-center w-full p-2 space-x-4 rounded-xl text-white transition-colors duration-200 transform 
                    bg-sky-700 hover:bg-sky-600 focus:outline-none 
                    focus:bg-sky-600">
                      <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-6 fill-current"
                            >
                         <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p className="h-1">Login with Google</p>
                        </Button>

                </div>
                
          </form>
       
        </div>
        
      );
    }
