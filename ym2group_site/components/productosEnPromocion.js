import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import ProductoPromocionado from "./productoPromocionado";

let arrProductosEnPromocion = [
    {
        id: 1,
        imagen: '/img/descuentomarcadorpizarrablanca.svg',
        titulo: 'Marcador pizarra rojo punta fina Ofiart',
        precioAnterior: 7.90,
        precioNuevo: 5.50,
        url: 'https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papelería%20quisiera%20mas%20informacion%20sobre%20Marcador%20pizarra%20rojo%20punta%20fina%20Ofiart%20https://ibb.co/Dw6KhMC',
        flagOfertaLimitada: true,
        btnVermas: true
    },
    {
        id: 2,
        imagen: '/img/descuentobandejatresniveles.svg',
        titulo: 'Bandeja de 3 niveles color plata',
        precioAnterior: 23,
        precioNuevo: 16.10,
        url: 'https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papelería%20quisiera%20mas%20informacion%20sobre%20bandeja%20tres%20niveles%20color%20plata%20https://ibb.co/8mBHSGx',
        flagOfertaLimitada: true,
        btnVermas: true

    },
    {
        id: 3,
        imagen: '/img/descuentoColoresAcuarelables.svg',
        titulo: 'Colores acuarelables x12 + pincel Kores',
        precioAnterior: 8.50,
        precioNuevo: 5.95,
        url: 'https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papelería%20quisiera%20mas%20informacion%20sobre%20Colores%20acuarelables%20x12%20mas%20pincel%20Kores%20https://ibb.co/xG68mDH',
        flagOfertaLimitada: true, 
        btnVermas: true

    },
];

export default function ProductosEnPromocion({productosDestacados}) {

    const [productosEnPromocion, setProductosEnPromocion] = useState(arrProductosEnPromocion);

    useEffect(() => {
        if(productosDestacados)
            setProductosEnPromocion(productosDestacados)
    }, [])
    
    

    return (
        <>
            {productosEnPromocion.length ? (
            <div className="grid grid-cols-1 mb-14 mt-5 lg:mt-20">
                <div className="block lg:grid grid-cols-3 gap-5 container mx-auto">
                    <div className="mx-auto py-5 text-blue-700">
                        <h2 className="grid justify-items-center text-2xl">Por tiempo<strong className=" font-medium text-4xl block grid justify-items-center">¡Limitado!</strong></h2>                
                    </div>
                    <div className="mx-auto py-5 text-blue-700 text-center">
                        <h2 className="lg:block grid justify-items-center text-3xl">Obtén hasta <strong className=" font-bold text-4xl text-orange-500">40%</strong> de descuento en productos seleccionados </h2>              
                        <h3 className="block grid justify-items-center text-1xl mt-3 lg:mt-0 text-center">Por la compra desde nuestro sitio web</h3> 
                        <h3 className="block grid justify-items-center text-1xl mt-3 lg:mt-0 text-center"> - válido hasta el 30 de abril - </h3> 
                    </div>
                    <div className="mx-auto py-5 flex justify-center lg:block">
                        <strong className="text-lg rounded-3xl lg:mt-3 text-white bg-blue-700 px-4 py-2">¡Pídelo ahora!</strong>                
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 px-5">
                    {                  

                        productosEnPromocion.map(productoPromocionado =>(
                            <ProductoPromocionado
                                productoPromocionado={productoPromocionado}
                                key={productoPromocionado.id}
                            />
                        ))
                    }
                </div>
            </div>
            ) : (
                <p className=" text-center mt-10">No hay productos en promoción aún</p>
            )}
        </>
    )
}