import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import ProductoPromocionado from "./productoPromocionado";

let arrProductosEnPromocion = [
    {"id":"35","imagen":"https://i.postimg.cc/0jgfQpzs/098679-ESTUCHE-TRIANGULAR-SAFARI-EXODUS-A19-Photo-Room-png-Photo-Room.png","titulo":"estuche triangular safari exodus a19","precioAnterior":"8","precioNuevo":"6.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20estuche%20triangular%20safari%20exodus%20a19%20https://ibb.co/8smQ7v1",flagOfertaLimitada:true, btnVermas: true}
    ,    
    {"id":"29","imagen":"https://i.postimg.cc/htQgHdkB/1035061-MORRAL-CAVA-KAVAK-Photo-Room-png-Photo-Room.png","titulo":"cava morral kavak relax","precioAnterior":"63","precioNuevo":"56.7","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20cava%20morral%20kavak%20relax%20https://ibb.co/drM7DDQ",flagOfertaLimitada:true, btnVermas: true}
    ,
    {"id":"4","imagen":"https://i.postimg.cc/PqG0g8MB/098677-BOLSO-SPORT-SAFARI-EXODUS-A1918-Photo-Room-png-Photo-Room.png","titulo":"bolso sport safari exodus a1918","precioAnterior":"28","precioNuevo":"23.8","url":"https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papeler�a%20quisiera%20mas%20informacion%20sobre%20bolso%20sport%20safari%20exodus%20a1918%20https://ibb.co/0MMCMNb",flagOfertaLimitada:true, btnVermas: true}
    ,
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
                        <h2 className="lg:block grid justify-items-center text-3xl">Obtén hasta <strong className=" font-bold text-4xl text-orange-500">33%</strong> de descuento en productos seleccionados </h2>              
                        <h3 className="block grid justify-items-center text-1xl mt-3 lg:mt-0 text-center">Por la compra desde nuestro sitio web</h3> 
                        {/* <h3 className="block grid justify-items-center text-1xl mt-3 lg:mt-0 text-center"> - válido hasta el 30 de abril - </h3>  */}
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