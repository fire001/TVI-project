import React from "react";
import { Disclosure} from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AboutUs() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();

  const toLogin = () => {
    let LoginPage = "/LoginPage";
    navigate(LoginPage);
  };
  
 const toHome = () => {
  let HomePage = "/";
  navigate(HomePage);
 };

 React.useEffect(() =>{
  window.addEventListener("resize",
  () => window.innerWidth >= 960 && setOpenNav(false));
 }, []);

 const navList = [
  { name: "Acerca de Nostros", href: "/AboutUs" },
  { name: "Talleres Asociados", href: "/TalleresAsociados"  },
  { name: "Nuestros Servicios", href: "/NuestrosServicios" },
  { name: "Agendar Cita", href: "/AgendarCitas" },
];

    return (
<>
<Disclosure as="nav" className="bg-gray-800 mx-auto flex flex-col sticky ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2  ">
              <div className="mx-auto relative flex  items-center justify-between ">
                
                <div className="flex flex-1 h-8 gap-3 items-center justify-center sm:items-stretch sm:justify-start ">
                  <div className="flex flex-shrink-0  h-10 items-center">
                    <h1 type="button" className="text-sky-400 font-semibold" onClick={toHome}>Car Trac</h1>
                  </div>
                  <div className="sm:flex sm:flex-col flex  ">
                    <div className="flex space-x-5">
                      {navList.map((item) => (
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
                    type="button"
                    className="m-3 pt-3 py-2 flex flex-wrap rounded-full border-solid border-1 border-sky-900 outline-cyan-500"onClick={toLogin}>
                    Login
                  </Button>
                </div>
               
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden ">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navList.map((item) => (
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

      {/*all text*/}

<div class="mx-auto h-10 backdrop-blur-xl bg-white/30 bg-gradient-to-t from-sky-900 to-gray-800"></div>

<div className="bg-sky-300 w-full h-screen">
<div className="">
    </div>    
</div> 

</>

);
};