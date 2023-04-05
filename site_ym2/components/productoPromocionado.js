import Image from "next/image"
import Link from "next/link"

export default function ProductoPromocionado({productoPromocionado}) {

    const {id, imagen, titulo, precioAnterior, precioNuevo, url, flagOfertaLimitada, btnVermas} = productoPromocionado;

    return (
        <div id={`${id}`} className="mx-auto p-5 my-5 hover:shadow-2xl rounded-2xl transition ease-in-out delay-150
                        hover:-translate-y-1 hover:scale-110 duration-300
        ">
            <div className="flex justify-center">
            <Image src={imagen} width={300} height={40} priority alt={titulo} className="block mb-4 w-40 h-40"/>
            </div>
            <div className="">
                <p className="text-lg font-medium">{titulo}</p>
                <div className="flex">
                    <p className=" text-lg">Antes <strong className="line-through"> ${precioAnterior} </strong> ahora <strong className=" font-bold text-xl"> ${precioNuevo} </strong></p>
                </div>
                <div className={`${flagOfertaLimitada === true ? ' ' : 'hidden'} mt-2 rounded-3xl max-w-max bg-orange-500 text-white p-1 pt-2 lg:pt-1 text-[10px] lg:text-lg uppercase lg:capitalize`}>Oferta limitada</div>
                <div className="flex justify-between mt-5 pt-5 border-t-gray-200 border-t-2">
                    <Link target="_blank" className="py-1 px-5 rounded-3xl border-2 border-orange-500 hover:bg-orange-500 hover:text-white" href={url}>
                        Pedir ahora
                    </Link>
                    <Link className={`${btnVermas === true ? ' ' : 'hidden'} py-1 px-5 rounded-3xl border-2 border-blue-700 hover:bg-blue-700 hover:text-white`} href="/productos/descuento">
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    )
}