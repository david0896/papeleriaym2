import Image from "next/image"
import Link from "next/link"

export default function ProductoPromocionado({productoPromocionado}) {

    const {id, imagen, titulo, precioAnterior, precioNuevo, url, flagOfertaLimitada, btnVermas} = productoPromocionado;

    return (
        <div id={`${id}`} className="p-5 my-5 lg:hover:shadow-2xl lg:rounded-2xl lg:transition lg:ease-in-out lg:delay-150
                        lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300
        ">
            <div className="flex justify-center">
            <Image src={imagen} width={300} height={40} priority alt={titulo} className="block mb-4 w-40 h-40"/>
            </div>
            <div className="">
                <p className="text-lg font-medium">{titulo}</p>
                <div className="flex">
                    <p className=" text-lg">Antes <strong className="line-through font-medium text-gray-500"> ${precioAnterior} </strong> ahora <strong className=" font-bold text-xl"> ${precioNuevo} </strong></p>
                </div>
                <div className={`${flagOfertaLimitada === true ? ' ' : 'hidden'} mt-2 rounded-3xl max-w-max bg-orange-500 text-white p-1 pt-2 lg:pt-1 text-[10px] lg:text-lg uppercase lg:capitalize`}>Oferta limitada</div>
                <div className="flex flex-wrap justify-between mt-5 pt-5 border-t-gray-200 border-t-2">
                    <Link target="_blank" className="py-1 px-3 lg:px-5 rounded-3xl border-2 border-orange-500 hover:bg-orange-500 hover:text-white text-base" href={url}>
                        Pedir ahora
                    </Link>
                    <Link className={`${btnVermas === true ? ' ' : 'hidden'} py-1 px-5 mt-4 lg:mt-0 rounded-3xl border-2 border-blue-700 hover:bg-blue-700 hover:text-white text-sm`} href="/productos/descuento">
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    )
}