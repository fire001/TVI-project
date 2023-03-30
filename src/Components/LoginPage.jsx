import { LockClosedIcon } from "@heroicons/react/20/solid";
import {useNavigate} from "react-router-dom"
import { Button } from "@material-tailwind/react";
import HomePage from "../Components/HomePage";
import React, {useState} from "react";
import {auth} from '../firebase';
import { signInWithEmailAndPassword,} from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


export default function LoginPage() {

  const navigate = useNavigate();
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState("");

  const onLogin = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword( auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("/")
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    })
  }

  const routeChange = () =>{
      let HomePage = "/";
      navigate(HomePage);
  }
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-gray-300 rounded-md shadow-xl shadow-slate-700/60 ring ring-gray-400 lg:max-w-xl" >
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Bienvenido
            </h2>
          </div>
          <form className="mt-2">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-blue-700 
                bg-white border rounded-md focus:border-blue-400 
                focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="email"
                required
                placeholder="email@example"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                  >
                    Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 
                  bg-white border rounded-md focus:border-blue-400 
                  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  />
            </div>
            <a href="#"
            className="text-xs text-blue-400 hover:underline"
            >
              olvido su contraseña?
            </a>
            <div className="mt-6">
              <Button className="rounded-xl font-semibold w-full px-4 py-2 h-12 tracking-wide 
                        text-white transition-colors duration-200 transform 
                        bg-sky-700 hover:bg-sky-600 focus:outline-none 
                        focus:bg-sky-600" onClick={onLogin}>
                LOGIN
              </Button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {""}
            No tienes una cuenta aun ?{""}
            <a href="./Register"
              className="font-medium text-blue-400 hover:underline">
                Crea una con nosotros
              </a>
          </p>
        </div>
      </div>
    </>
  );
}
