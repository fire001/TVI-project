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
  
const routeChange = () => {
  let LoginPage = "./LoginPage";
  navigate(LoginPage);
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
<Disclosure as="nav" className="bg-gray-800 mx-auto lg:block">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 ">
              <div className="mx-auto relative flex  items-center justify-between ">
                
                <div className="flex flex-1 h-8 gap-3 items-center justify-center sm:items-stretch sm:justify-start ">
                  <div className="flex flex-shrink-0  h-10 items-center">
                    <h1 className="text-sky-400 font-semibold">Car Trac</h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:block ">
                    <div className="flex space-x-4">
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
                    className="m-3 pt-3 py-2 flex flex-wrap rounded-full border-solid border-1 border-sky-900 outline-cyan-500"onClick={routeChange}
                  >
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
<div>
<div class="mx-auto h-10 backdrop-blur-xl bg-white/30 bg-gradient-to-t from-sky-900 to-gray-800"></div>
</div>
<div className=" top-0 left-0 h-full w-full relative flex justify-center min-h-screen overflow-hidden bg-center bg-cover bg-no-repeat bg-[url('https://wallpaperaccess.com/full/4028171.jpg')]">
    <div className=" mx-auto max-w-7xl lg:px-4  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-90 bg-gray-500 rounded-lg shadow-md shadow-slate-700/60  ring-gray-400 lg:max-w-6xl ">
        <div className="mx-auto  ">
          <h3 className="text-4xl font-bold text-white sm:text-4xl  ">Car Trac</h3>
    <div className="">
          <div className="mt-4 text-lg leading-8 text-white overscroll-y-auto w-full  h-full  ">
          Somos Car Trac, la mejor alternativa para el cuidado y mantenimiento de tus vehículos. Nuestro objetivo es proporcionar comodidad y conveniencia a nuestros clientes al eliminar la necesidad de visitar talleres, hacer filas y lidiar con los inconvenientes asociados con el mantenimiento de vehículos.
        
          En Car Trac, entendemos lo ocupada que puede ser la vida moderna. Por eso, ofrecemos un servicio completo de cuidado y mantenimiento de vehículos directamente en la comodidad de tu hogar u oficina. No importa dónde te encuentres, estaremos encantados de ir hasta allí para brindarte nuestros servicios de alta calidad, una de nuestras características más destacadas es nuestro servicio de recogida y entrega. Sabemos que no siempre tienes el tiempo suficiente para llevar tu vehículo al taller. Con Car Trac, te olvidarás de esas preocupaciones. Simplemente programa una cita a través de nuestra App y nuestro equipo vendrá a tu ubicación designada para recoger tu vehículo. Una vez que hayamos completado los servicios necesarios, te lo entregaremos de nuevo en el lugar que nos indiques. ¡Es así de sencillo!
          
          Para garantizar que podemos brindar nuestros servicios a todo tipo de vehículos, independientemente de su procedencia, contamos con distintos talleres especializados. Nuestro equipo de técnicos altamente capacitados tiene experiencia en el mantenimiento y reparación de vehículos coreanos, americanos, japoneses y europeos, todo bajo los lineamientos de cuidado de cada fabricante. Ya sea que conduzcas un Hyundai, un Chevrolet, un Toyota o un Mercedes-Benz, puedes confiar en nosotros para cuidar de tu vehículo de manera profesional.
          
          seguimiento: En Car Trac llevamos el servicio personalizado a otro nivel, por eso nuestro principal enfoque es brindar a nuestros clientes una experiencia cómoda, sin complicaciones y que tengas acceso al histórico de mantenimientos y posibles mejoras realizadas a tu vehículo, ya que en nuestra aplicación podrás registrar tu vehículo, cada vez que tengas cita con nosotros, esto generara un tracking en el histórico de tu vehículo en el que podrás ver:
          <br></br>
          <ul>
            <li >
            -	Que se realizó al vehículo
            </li>
            <li>
            -	En que centro de servicios se realizo
            </li>
            <li>
            -	Que técnico realizo el servicio
            </li>
            <li>
            -	Resultado de la inspección general
            </li>
            <li>
            -   Recomendaciones para el próximo mantenimiento
            </li>
          </ul>


Al elegir nuestros servicios, puedes evitar largas esperas en los talleres, perder tiempo valioso o lidiar con el estrés de las reparaciones. Nos encargamos de todo por ti para que puedas continuar con tus actividades diarias sin interrupciones. Tu vehículo estará en manos seguras y recibirás un servicio de calidad sin la necesidad de visitar físicamente un taller.
<br>
</br> 
Conclusión: En resumen, nuestra empresa de cuidado y mantenimiento de vehículos a domicilio está aquí para ofrecerte comodidad, conveniencia y un servicio excepcional. Ya no tendrás que preocuparte por hacer filas, visitar talleres o perder tiempo valioso. Nuestro equipo de profesionales se encargará de cuidar de tu vehículo, sin importar su origen, mientras tú, simplemente continuas tu rutina. Confía en nosotros para mantener tu vehículo en excelentes condiciones sin las molestias habituales.
          </div>
          </div>
        </div>
      </div>
    </div>
</>
    );

}