import React, {useState, useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';
import {
    Button,
  } from "@material-tailwind/react";


  
export default function Register(){
    const onSubmit = async(e)=>{
        e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        //Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/LoginPage")
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        
    });
    }
       
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    return (
<>
<section>
    <div>
        <div>
            <h1>Register</h1>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <h3 className="text-4xl font-bold text-sky-500">TVI</h3>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-neutral-400 shadow-md sm:max-w-lg sm:rounded-lg">
                <form>
                    <div>
                        <label htmlFor="name"
                        className="block text-sm font-medium text-gray-700 undefined"
                        >
                           Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                            type="text"
                            name="name"
                            
                            placeholder="Name"
                            className="block w-full mt-1 border-sky-300 rounded-md shadow-sm focus
                             focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50">
                            
                            </input>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="name"
                        className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Last Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                            type="text"
                            name="name"
                            
                            placeholder="Last Name"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus
                             focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">

                            </input>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="email"
                            className="block text-sm font-medium text-gray-700 undefined">
                                Email
                            </label>

                        <div className="flex flex-col items-start">
                            <input 
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email Address"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </input>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label 
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 undefined">
                            Password
                        </label>
                    <div className="flex flex-col items-start">
                        <input 
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Ingrese una contraseña mayor de 6 caracteres"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                    </div>
                    </div>
                    
                    <div className="mt-4">
                        <label 
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 undefined">
                           Confirm Password
                        </label>
                    <div className="flex flex-col items-start">
                        <input 
                            type="password"
                            name="password"
                            value={ConfirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="confirme su contraseña"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                    </div>

                    </div>
                    <div className="flex items-center mt-4">
                        <Button type="submit" className=" rounded-xl font-semibold w-full px-4 py-2 h-12 tracking-wide 
                        text-white transition-colors duration-200 transform 
                        bg-sky-700 hover:bg-sky-600 focus:outline-none 
                        focus:bg-sky-600" onClick={onSubmit}>Register</Button>
                    </div>
                </form>
                <div className="mt-4 text-gray-600">
                    Already have an account ? {""}
                    <span>
                        <a className="text-sky-700 hover:underline" href="./LoginPage">
                            Log in
                        </a>
                    </span>
                </div>
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
                </div>
               
            </div>
        </div>
    </div>
</section>
</>
    );
}
