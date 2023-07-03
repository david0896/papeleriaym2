import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductoPromocionado({productoPromocionado}) {

    const {id, imagen, titulo, precioAnterior, precioNuevo, url, flagOfertaLimitada, btnVermas} = productoPromocionado;
    const [viewChildShopNow, setViewChildShopNow] = useState(false);
    const [viewChildSeeMore, setViewChildSeeMore] = useState(false);
    const toggleViewChildShopNow = ()=>{
        setViewChildShopNow(!viewChildShopNow);
    }
    const toggleViewChildSeeMore = ()=>{
        setViewChildSeeMore(!viewChildSeeMore);
    }

    return (
        <div 
            id={`${id}`} 
            className="
                relative
                block
                md:flex
                bg-white
                py-5 
                px-0
                md:px-2
                space-x-3
                lg:hover:shadow-2xl 
                lg:rounded-2xl
                border-b-2
                md:border-2
                border-slate-200 
                lg:transition 
                lg:ease-in-out 
                lg:delay-150
                lg:hover:-translate-y-1 
                lg:hover:scale-110 
                lg:hover:z-50
                lg:duration-300
        ">
            <Link target="_blank" href={url} className="block w-auto md:w-2/5 border-r-slate-200 md:border-r-2 flex items-center">
                <Image src={imagen} width={300} height={300} priority alt={titulo} className="w-auto"/> 
            </Link>
            <div className="w-auto md:w-3/5 block md:space-x-1">
                <p className="text-base md:text-lg md:font-semibold mb-2">{titulo}</p>
                <div className="flex md:block space-x-1 md:space-x-0 items-center">
                    <p className="text-lg md:text-xl md:font-medium line-through text-gray-500">${precioAnterior}</p>
                    <p className="text-xl md:text-2xl font-semibold">${precioNuevo}</p>
                </div>
                <div className="hidden md:flex items-center space-x-2 text-lg font-medium h-10 mt-2">
                    <Link
                        target="_blank"
                        href={url}
                        onMouseEnter={toggleViewChildShopNow}
                        onMouseLeave={toggleViewChildShopNow} 
                        className="border-2 border-slate-200 p-2 border-2 border-slate-200 transition-colors hover:bg-slate-100 rounded-lg"
                    >
                        
                        <div className="space-x-1 relative flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${viewChildShopNow === true ? 'fill-orange-500' : 'fill-slate-500'}`}>
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>
                            {viewChildShopNow && (
                                <motion.span
                                    initial={{opacity:0,x:-10}}                         
                                    animate={
                                    { opacity: viewChildShopNow === true ? 1 : 0,
                                            x: viewChildShopNow === true ? 0 : -10
                                    }}
                                    transition={{duration:1}} 
                                    className=" text-slate-600"
                                >Pedir ahora</motion.span>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
            <span className={`${flagOfertaLimitada === true ? ' ' : 'hidden'} absolute top-5 rounded-3xl max-w-max bg-orange-500 text-white py-1 px-2 text-[15px] capitalize`}>limitado</span>

        </div>
    )
}