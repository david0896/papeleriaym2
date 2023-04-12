import { useState } from "react";
import Link from "next/link";
import Image from "next/image"


export default function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <> 
      <nav className="relative flex flex-wrap items-center justify-between px-2">
        <div className="container lg:px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" className="inline-block whitespace-nowrap w-20 -translate-x-1 pt-2 pb-2 lg:hidden">
               <Image src="/img/ym2gris.svg" width={300} height={40} alt='logo de ym2 group'/>
            </Link>
            <button
              className=" text-gray-700 cursor-pointer px-3 border border-transparent hover:text-orange-500 bg-transparent block lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <svg    xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="tree-navbar"
          >
            <ul className="flex flex-col w-full lg:w-auto lg:flex-row list-none">
              <li className="">
                <input 
                    id="intoSearchProduct"
                    type="text"
                    className="hidden lg:hidden p-1 bg-white border-2 border-orange-500 focus:border-orange-500 hover:border-opacity-75 w-11/12 rounded-3xl pl-10"
                    placeholder="Busca productos YM2"
                    name="intoSearchProduct"
                />
              </li>
              <li className="">
                <Link
                  className="block font-medium items-center leading-snug py-2 px-3 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="/"
                >
                    Inicio
                </Link>
              </li>
              <li className="relative group">
                <button
                  className="outline: 2px "
                  aria-haspopup="true"
                >
                  <Link href="/productos"
                        className="block font-medium items-center leading-snug py-2 px-3 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                  >
                    Productos
                  </Link>
                </button>
                <div
                  className="absolute lg:-left-48 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 lg:min-w-[560px] transform"
                >
                  <div
                    className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full"
                  >
                    <div
                      className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"
                    ></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <p
                            className="uppercase tracking-wider text-gray-500 font-medium text-[13px]"
                          >
                            Categorías
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li>
                              <Link
                                href={{
                                  pathname: "/productos",
                                  query: {
                                    bloque: 1,
                                  },
                              }} 
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-orange-100 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-blue-700"
                              >
                                Artículos de Oficina
                                <p className="text-gray-500 font-normal">
                                  Mejora la productividad laboral  
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={{
                                  pathname: "/productos",
                                  query: {
                                    bloque: 2,
                                  },
                              }}
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-orange-100 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-blue-700"
                              >
                                Útiles Escolares
                                <p className="text-gray-500 font-normal">
                                Todo para el ambiente escolar
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={{
                                  pathname: "/productos",
                                  query: {
                                    bloque: 3,
                                  },
                              }}
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-orange-100 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Morales y Bolsos
                                <p className="text-gray-500 font-normal">
                                Transporta con estilo y comodidad
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={{
                                  pathname: "/productos",
                                  query: {
                                    bloque: 4,
                                  },
                              }}
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-orange-100 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Cuentos y Juegos Didácticos
                                <p className="text-gray-500 font-normal">
                                Aprende y diviértete
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p
                            className="uppercase tracking-wider text-gray-500 font-medium text-[13px]"
                          >
                            Ofertas
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li>
                              <Link
                                href={{
                                  pathname: "/productos/descuento",
                              }}
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-orange-100 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-blue-700"
                              >
                                Productos con descuento
                                <p className="text-gray-500 font-normal">
                                  Aprovecha al máximo nuestros descuentos del mes 
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="">
                <Link
                  className="block font-medium items-center leading-snug py-2 px-3 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="/nosotros"
                >
                  <span>Nosotros</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="block font-medium items-center leading-snug py-2 px-3 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="/contacto"
                >
                  <span>Contacto</span>
                </Link>
              </li>
              
              <li className="">
                <ul className=" lg:hidden border-t-gray-200 border-t-2">
                    <li>
                        <Link
                            className="px-3 py-2 flex items-center text-base leading-snug text-gray-600 hover:opacity-75 hover:text-orange-500 "
                            href="/productos/descuento"
                        >
                        <span className="ml-2 uppercase">Ofertas</span>
                        </Link>
                    </li>
                    <li className="hidden">
                        <Link
                            className="px-3 py-2 flex items-center text-base leading-snug text-gray-600 hover:opacity-75 hover:text-orange-500 "
                            href="/"
                        >
                        <span className="ml-2 uppercase ">Compras</span>
                        </Link>
                    </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      {/* <nav>
        <ul className="flex items-center justify-center font-semibold">
          <li className="relative group px-3 py-2">
            <button
              className="hover:opacity-50 cursor-default "
              aria-haspopup="true"
            >
              Products
            </button>
            <div
              className="absolute lg:-left-48 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform"
            >
              <div
                className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full"
              >
                <div
                  className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"
                ></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p
                        className="uppercase tracking-wider text-gray-500 font-medium text-[13px]"
                      >
                        The Suite
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Course Editor
                            <p className="text-gray-500 font-normal">
                              All in one editor
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accept payments
                            <p className="text-gray-500 font-normal">
                              Pre-build payments page
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Close captioning
                            <p className="text-gray-500 font-normal">
                              Use AI to generate captions
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p
                        className="uppercase tracking-wider text-gray-500 font-medium text-[13px]"
                      >
                        Extensions
                      </p>
                      <ul className="mt-4 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Plugins
                            <p className="text-gray-500 font-normal">
                              Tweak existing functionality
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Batch uploads
                            <p className="text-gray-500 font-normal">
                              Get your time back
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Social sharing
                            <p className="text-gray-500 font-normal">
                              Generate content for socials
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav> */}
    </>
      
  );
}