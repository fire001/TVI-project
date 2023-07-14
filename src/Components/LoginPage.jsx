
import { useNavigate } from "react-router-dom";
import {useAuth} from '../context/authContext';
import React, { useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import "firebase/compat/firestore";
import { Alert } from "./Alert";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/Dashboard");
    } catch (error) {
      console.log(error.code, error.message);
      if (error.code === "auth/email-already-in-use") {
                setError("Este email ya esta en uso")
              }
              else if (error.code === "auth/invalid-password") {
                setError("Contraseña invalida")
              }
              else if (error.code === "auth/user-not-found") {
                setError("Usuario no encontrado")
              }   
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/Dashboard");
    } catch (error) {
      setError(error.message, error.code);
      console.log(setError());
    }
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Ingese su correo");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message, error.code, error.undefined);
      console.log(setError());
    }
  };

  return (
    <div className="top-0 left-0 h-full w-full relative flex justify-center min-h-screen overflow-hidden bg-center bg-cover bg-no-repeat bg-[url('https://wallpaperaccess.com/full/4028171.jpg')]">
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="w-full p-6 m-auto bg-opacity-80 bg-gray-300 rounded-md shadow-xl shadow-slate-700/60 ring ring-gray-400 lg:max-w-xl"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="example@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <div className="flex flex-col items-center ">
          <button
            className="flex items-center justify-center uppercase  transition-colors duration-200 transform 
            bg-sky-700 hover:bg-sky-600 focus:outline-none 
            focus:bg-sky-600 text-white font-bold py-2 px-8 rounded-lg focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          <p className="my-3 text-md flex justify-between px-6 no-underline">
            <Link to="#!"
            onClick={handleResetPassword}
          >
            Olvidaste tu contraseña?
            </Link>
          </p>
        </div>
        <p className=" text-md flex justify-between px-2">
        Don't have an account?
        <Link to="/register" className=" no-underline text-blue-700 hover:text-blue-900">
          Register
        </Link>
      </p>

      <button className="bg-sky-700 hover:bg-sky-600 text-white focus:shadow-outline rounded-lg font-bold focus:bg-sky-600  py-2 px-4 w-full" onClick={handleGoogleSignin}>Continue With Google</button>

      </form>
     
   
    </div>
    </div>
  );
}
