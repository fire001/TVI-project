import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";


const navigation = [
  { name: "Acerca de Nostros", href: "/AboutUs" },
  { name: "Talleres Asociados", href: "/TalleresAsociados"  },
  { name: "Nuestros Servicios", href: "/NuestrosServicios" },
  { name: "Agendar Cita", href: "/AgendarCitas" },
];

const stats = [
  { name: "Talleres Asociados", value: "12" },
  { name: "Servicios", value: "50+" },
  { name: "Clientes Satisfechos", value: "1000000+" },
  { name: "Financiamientos", value: "Disponibles" },
];

const includedFeatures1 = [
  "Maximo 1 vehiculo",
  "Registro de mantenimiento",
  "Asesoria",
  
 
];
const includedFeatures2 = [
  "Maximo 3 vehiculos",
  "Registro de mantenimiento",
  "Asesoria",
  
];
const includedFeatures3 = [
  "Ajustamos todo a la medida de tu necesidad",
  "Registro de mantenimiento",
  "Asesoria",

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage() {

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };
 

  const toLogin = () => {
    let LoginPage = "./LoginPage";
    navigate(LoginPage);
  };


  return (
    <>
      {/* NAVBAR*/}
      <Disclosure as="nav" className="bg-gray-800 mx-auto ">
        {({ open }) => (
          <>
            <div className="mx-auto lg:max-w-7xl  ">
              <div className="mx-auto flex flex-wrap p-3 sm:flex-col md:flex-row items-center">
                
                <div className="flex flex-1 h-8 gap-3 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0  h-10 items-center">
                    <h1 className="text-sky-400 font-semibold">Car Trac</h1>
                  </div>
                  <div className="sm:ml-6 ">
                    <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                      {navigation.map((item) => (
                        <NavLink 
                        key={item.name}
                        to={item.href}
                        className={({isActive}) =>{ 
                        return " text-white rounded-md px-3 py-2 text-sm font-medium no-underline" +
                        (!isActive ?" text-white hover:bg-gray-700 no-underline" : " text-gray-300 hover:bg-gray-700 hover:text-white no-underline" )                         
                        }}         
                        >
                        {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              
                <div className="mx-auto flex items-center">
                  <div className="flex space-x-1">
                    <input
                      type="text"
                      className="block w-full px-2 py-1 text-sky-700 bg-white border rounded-full focus:border-sky-700 focus:ring-sky-700 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Search..."
                      />
                      <Button className="px-2.5 py-2 text-white bg-sky-700 rounded-full outline-cyan-500">
                        <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="w-5 h-5"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         strokeWidth={2}
                        ><path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                        </svg>
                      </Button>
                  </div>
                </div>
                <div className="flow-root">
                  <Button 
                  className="m-3 pt-3 py-2 flex flex-wrap rounded-full border-solid border-1 border-sky-900 outline-cyan-500"onClick={toLogin}
                  >
                    Log in ?
                  </Button>
                </div>
               
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* ABOUT US */}
      <div class="mx-auto h-10 backdrop-blur-xl bg-white/30 bg-gradient-to-t from-sky-900 to-gray-800"></div>
      
      <img
        className="top-0 left-0 h-full w-full relative "
        src="https://wallpaperaccess.com/full/4028171.jpg"
        alt=""
      />
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="mx-auto absolute left-1/2 -top-52 -z-10  -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="my-auto max-w-7xl lg:px-4 sm:flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-20 bg-gray-200 rounded-lg shadow-md shadow-slate-700/60  ring-gray-400 lg:max-w-6xl ">
        <div className="content-center ">
          <h3 className="mt-4 text-4xl font-bold text-white sm:text-4xl ">Car Trac</h3>
          <br></br>
          <p className="mt-4 text-lg leading-8 text-white ">
          Somos Car Trac, la mejor alternativa para el cuidado y mantenimiento de tus vehículos,
          ofrecemos un servicio completo de cuidado y mantenimiento de vehículos con la modalidad de Recogida y entrega, 
          no tendrás que preocuparte por hacer filas, visitar talleres o perder tiempo valioso. 
          Nuestro equipo de profesionales se encargará de cuidar de tu vehículo, mientras tú, simplemente continuas tu rutina, 
          tan solo programa una cita a través de nuestra App y nuestro equipo vendrá a tu ubicación designada para recoger tu vehículo. 
          Una vez que hayamos completado los servicios necesarios, te lo entregaremos de nuevo en el lugar que nos indiques. ¡Es así de sencillo!
          También podrás consultar el histórico de tus mantenimientos y reparaciones desde tu móvil.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"></div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white mt-2">
                  {stat.value}
                </dd>
                <dt className="text-2xl leading-7 text-white mt-2">
                  {stat.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
      
      {/* PLANES DISPONIBLES */}
              
      <div className="bg-gray-200 p-24 ">
      <h2 className="text-3xl font-bold tracking-tight text-sky-700 sm:text-6xl text-center">
              Planes Disponibles
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              <h3>Conoce nuestros planes que tenemos para ofrecerte</h3>
            </p>
  
        <div className="col-span-3 sm:flex-col flex bg-gray-200 rounded-xl ">
          <div className="mx-auto p-3 grid grid-cols-3 gap-5 sm:text-center">         
        
          
          <div className="mx-auto mt-10 rounded-3xl ring-1 ring-gray-200  hover:bg-gray-300 bg-blue-300">
            <div className="p-8  rounded-3xl sm:p-10 lg:flex-auto">
            
          {/*Plan personal*/}

              <h1 className="text-3xl font-bold  text-grey-900">
                Plan Personal
              </h1>
            
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-sky-600">
                  Que incluye ?
                </h4>
                <div className="h-px flex-auto bg-white " />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures1.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-green-700"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto m-4 p-2 lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-3xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 bg-slate-300">
                <div className="mx-auto max-w-xs px-8">
                
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      $25
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                    
                  </p>
                  <p className="text-base font-semibold  text-gray-700">
                  Anuales
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-sky-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/*PLan Familiar */}

          <div className=" mx-auto mt-10 rounded-3xl ring-1 ring-gray-200  hover:bg-gray-300 bg-blue-300">
            <div className="p-8  rounded-3xl sm:p-10 lg:flex-auto ">

              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Plan Familiar
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-sky-600">
                  Que incluye ?
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures2.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-green-700"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto m-4 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 bg-slate-300">
                <div className="mx-auto max-w-xs px-8">
                 
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      $55
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <p className="text-base font-semibold text-gray-600">
                    Anuales
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-sky-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 rounded-3xl ring-1 ring-gray-200  hover:bg-gray-300 bg-blue-300">
            <div className="p-8  rounded-3xl sm:p-10 lg:flex-auto">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Plan Empresarial
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
              
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <h4 className="flex-none text-sm font-semibold leading-6 text-sky-600">
                  Que incluye ?
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures3.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-green-700"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto m-4 p-2 lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl  py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 bg-slate-300">
                <div className="mx-auto max-w-xs px-8">
                 
                  <p className="mt-6 flex items-baseline justify-center gap-x-2 text-2xl  font-semibold text-black-600">
                   Ajustamos todo a la medida de tu necesidad para que tu negocio no se detenga
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-sky-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* FOOTER */}

      <footer class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
          <div class="mr-12 hidden lg:block">
            <span>Contactanos:</span>
          </div>
          <div class="flex justify-center">
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="#!" class="text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="mx-6 py-10 text-center md:text-left">
          <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="">
              <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-3 h-4 w-4"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
                TVI
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div class="">
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Servicios
              </h6>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                  Lorem
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                  Lorem
                </a>
              </p>
              <p class="mb-4 ">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                  Lorem{" "}
                </a>
              </p>
              <p>
                <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                  lorem
                </a>
              </p>
            </div>
            <div class="">
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Ver
              </h6>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                  Acerca de nosotros
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                  Planes
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                  Ordenes
                </a>
              </p>
              <p>
                <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                  Ayuda
                </a>
              </p>
            </div>
            <div>
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contactanos
              </h6>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-3 h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Santo Domingo, Distrito Nacional, RD
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                tvi@example.com
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-3 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                809-555-5555 / 809-333-3333
              </p>
            </div>
          </div>
        </div>
        <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
          <span>© 2023 Copyright: </span>
          <span class="font-semibold text-neutral-300 dark:text-neutral-400">
            Car Trac
          </span>
        </div>
      </footer>
    </>
  );
}
