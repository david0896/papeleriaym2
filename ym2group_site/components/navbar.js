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
                    <li className="flex lg:hidden mb-5 mt-1 px-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mr-2 fill-orange-500" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                      <Link target="_blank" href='https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papelería%20quisiera%20más%20información%20sobre%20sus%20productos' className="font-medium">
                          Contacto {"("}0412{")"} 212 14 62
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