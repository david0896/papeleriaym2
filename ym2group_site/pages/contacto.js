import Layout from "@/components/layout"
import Image from "next/image";
import Link from "next/link";
import HeaderParallaxBanner from "@/components/headerParallaxBanner";
import FormularioDeContacto from "@/components/formularioDeContacto";
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('@/components/mapaUbicacionLocal'), {
  ssr: false,
});

export default function Contacto() {
  return (
    <Layout 
        title={'| Nosotros'}
        description={'Sobre nosotros, venta de articulos de papelería'}
    >        
        <HeaderParallaxBanner
          titulo={'Contacto'}
        />
        <div className="container mx-auto mb-24">
            <div className=" px-10 grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 lg:space-x-5 space-y-5 lg:space-y-0 mt-20 lg:mt-24">
                <div className="md:col-span-1 p-10 rounded-2xl border-2 border-gray-300">
                    <div className="flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-5 w-10 h-10 text-orange-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <h3 className=" text-lg text-xl font-bold">Teléfonos</h3>
                    </div>
                    <div className=" text-gray-700 lg:text-left mt-3">
                        <p className="text-lg text-center"><span className=" font-medium">0412</span> 2121462</p> 
                        <p className="text-lg text-center"><span className=" font-medium">0212</span> 2640080</p>
                        <p className="text-lg text-center"><span className=" font-medium">0412</span> 2121462</p>
                    </div>
                </div>
                <div className="md:col-span-1 p-10 rounded-2xl border-2 border-gray-300">
                    <div className="flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-5 w-10 h-10 text-orange-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                        <h3 className=" text-lg text-xl font-bold">Dirección</h3>
                    </div>
                    <div className=" text-gray-700 lg:text-left mt-3 ">
                        <p className="text-lg text-center">
                        Calle Bolívar de Chacao, <br/> Edif. Grano de Oro PB, <br/> Chacao, Edo Miranda 
                        </p>
                    </div>
                </div>
                <div className="md:col-span-1 p-10 rounded-2xl border-2 border-gray-300">
                    <div className="flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-5 w-10 h-10 text-orange-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <h3 className=" text-lg text-xl font-bold">Correo</h3>
                    </div>
                    <div className=" text-blue-700 underline text-center lg:text-left mt-3 ">
                        <p className="text-xs lg:text-lg text-center hover:text-blue-700/50"><Link href={"mailto:ventas@ym2papeleria.com"}>ventas@ym2papeleria.com</Link></p>
                        <p className="text-xs lg:text-lg text-center hover:text-blue-700/50"><Link href={"mailto:soporte@ym2papeleria.com"}>soporte@ym2papeleria.com</Link></p>
                    </div>
                </div>
            </div>            
            <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2 p-10 pb-0 lg:pb-10 lg:h600 grid content-center">
                    <h2 className="block text-2xl lg:text-5xl font-bold py-3">
                        Solucionamos todas tus necesidades de papelería
                    </h2>
                    <p className="block text-lg py-3">
                        Sabemos lo importante que es tener todo lo necesario para tus actividades escolares, laborales o personales, por lo que en nuestra empresa de papelería estamos comprometidos en brindarte la solución que buscas. Para ello, tenemos un equipo de atención al cliente dispuesto a ayudarte en todo momento.
                    </p>
                    <p className="block text-lg py-3 italic text-gray-600">
                        ¡No esperes más y hagamos juntos de tu actividad una experiencia mucho más sencilla y exitosa!
                    </p>
                    <FormularioDeContacto/>
                </div>           
                <div className='md:col-span-2 p-4 lg:p-10 h-96 lg:h-auto' style={{paddingTop: 4.2 + 'rem'}}> 
                    <h4 className="lg:hidden text-xl font-bold mb-5">Ubicación</h4>
                    <MapWithNoSSR/>
                </div>          
            </div>
        </div>
    </Layout>
  )
}
