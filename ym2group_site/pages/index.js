import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Layout from "@/components/layout"
import Link from "next/link"
import Image from "next/image";
import styles from '../styles/styles.module.css'
import CarrouselInfinitoMarcas from "@/components/carrouselInfinitoMarcas";
import ProductosEnPromocion from "@/components/productosEnPromocion";
import dynamic from 'next/dynamic';
import CarouselNext from "@/components/carrouselNext";
import PreviewBlog from "@/components/previewblog";
import ModalEmergente from "@/components/modalemergente";
import { motion } from "framer-motion";

const InstagramEmbedded = dynamic(() => import('@/components/instagramEmbedded'), {
  ssr: false,
});

const FormularioDeSubscripcion = dynamic(() => import('@/components/formularioDeSubscripcion'), {
  ssr: false,
});

export default function Home() {
  const { ref, inView } = useInView();

  return (
    <>
      <Layout
        title={'| Inicio'}
        description={'Venta de articulos de papelería'}
      >
        <ModalEmergente/>
        {/*carousel*/}
        <CarouselNext/> 
        {/*metodos*/}
        <div className="lg:w-9/12 lg:mx-auto lg:rounded-2xl lg:border-2 lg:-mt-10 lg:shadow-xl lg:z-10 lg:relative bg-white lg:border-slate-200 p-8 grid gap-4 lg:grid-cols-4 ">
          <div className="hidden lg:block">
            <Image src="https://i.postimg.cc/cJYDFDmn/shipped.png" priority width={512} height={512} quality={100} alt="Envío gratis" className="w-10 md:w-16 mx-auto mb-2"/>
            <p className="block text-center md:text-base">
              <spam className="font-bold block">Envío gratis</spam>
              en Caracas cuando gasta más de 99$
            </p>
          </div>
          <div className="hidden lg:block">
            <Image src="https://i.postimg.cc/vmBnBD1H/courier.png" priority width={512} height={512} quality={100} alt="Delivery a tiempo" className="w-10 md:w-16 mx-auto mb-2"/>
            <p className="block text-center md:text-base">
              <spam className="font-bold block">Delivery a tiempo</spam>
              ¿le resulta complicado venir?
            </p>
          </div>
          <div className="hidden lg:block">
            <Image src="https://i.postimg.cc/zfcxDsG6/payment-security.png" priority width={512} height={512} quality={100} alt="Pago seguro" className="w-10 md:w-16 mx-auto mb-2"/>
            <p className="block text-center md:text-base">
              <spam className="font-bold block">Pago seguro</spam>
              utilizamos métodos de pago seguro
            </p>
          </div>
          <div className="hidden lg:block">
            <Image src="https://i.postimg.cc/fyrz8Tz5/cash-on-delivery.png" priority width={512} height={512} quality={100} alt="cobro a la entrega" className="w-10 md:w-16 mx-auto mb-2"/>
            <p className="block text-center md:text-base">
              <spam className="font-bold block">Cobro a la entrega</spam>
              paga al recibir tu compra
            </p>
          </div>          
        </div>
        {/*section 1 productos en promoción*/}
        <div className="lg:w-9/12 lg:mx-auto -mt-6 lg:mt-0">
          <ProductosEnPromocion/> 
        </div>
        {/*section 1 categorias de productos*/}
        <div className="w-9/12 mx-auto py-10 -mb-14 -mt-6 z-40 relative">
          <div className="flex justify-center mb-5 text-blue-700 ">
            <h2 className="grid justify-items-center font-medium text-2xl lg:text-4xl lg:flex">Explora nuestras <strong className=" font-semibold block lg:ml-2 grid justify-items-center text-orange-500">categorías</strong>&nbsp; destacadas</h2>                
          </div>
          <h3 className="grid justify-items-center text-lg lg:text-2xl text-center text-blue-700">Descubre nuestras categorías más populares y destacadas</h3>
        </div>
        <div className="relative z-10 ">
          <Image
            priority 
            src='https://i.postimg.cc/tJrk1n4Z/fondo-Azul-Schoolblue-Up.jpg' 
            className="
              lg:w-screen
              h-[70rem]
              lg:h-auto
              object-cover
            "
            width={3080}
            height={1080}
            quality={100}
            alt="backgroud escolar"
          />
          
          <div className="w-9/12 mx-auto h-4/6 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="grid lg:grid-rows-6 grid-cols-1 lg:grid-cols-3 h-full">
                <div className="relative overflow-hidden row-span-4 m-1 rounded-2xl p-5 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-300 h-[12rem] lg:h-auto">
                    <span className="mb-2 lg:mb-0 text-center lg:text-left text-xl lg:text-lg font-medium lg:font-semibold text-slate-700 block">Artículos de Oficina</span>
                    <span className="text-base font-medium text-slate-600 hidden lg:block mb-5">Impulsa tu productividad: Equipa tu oficina con nuestros productos</span>
                    <Image priority src="https://i.postimg.cc/SKhVLPYs/kmarker.png" alt="Artículos de Oficina" width={720} height={720} className="absolute bottom-0 right-0 w-[60%] -translate-x-[30%] translate-y-[25%] sm:translate-y-[55%] md:translate-y-[64%] lg:translate-x-5 lg:translate-y-20 rotate-90"/>
                    <Link href={{
                          pathname: '/productos',
                          query: {
                              bloque: 1,
                          },
                      }}  
                      className="w-[70%] lg:w-auto absolute bottom-4 left-[50%] -translate-x-[50%] text-slate-700 lg:static py-2 px-5 rounded-3xl text-center lg:text-left text-base bg-orange-50 font-medium border-[0.1rem] border-blue-700 hover:border-0 hover:bg-blue-700 transition-colors hover:text-white "
                    >Ver más</Link>                  
                </div>
                <div className="relative overflow-hidden row-span-3 m-1 rounded-2xl p-5 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-400 h-[12rem] lg:h-auto">
                  <span className="mb-2 lg:mb-0 text-center lg:text-left text-xl lg:text-lg font-medium lg:font-semibold text-slate-700 block">Morrales y Bolsos</span>
                  <span className="text-base font-medium text-slate-600 hidden lg:block mb-5">Hecho con los materiales más duraderos y resistentes</span>
                  <Image priority src="https://i.postimg.cc/sxCKD0P7/MORRAL-EXODUS.png" width={720} height={720} alt="morrales y bolsos" className="absolute bottom-0 right-0 w-[60%] lg:w-[50%] -translate-x-[30%] translate-y-[25%] sm:translate-y-[55%] md:translate-y-[64%] lg:-translate-x-2 lg:translate-y-20 -rotate-12"/>
                  <Link href={{
                        pathname: '/productos',
                        query: {
                            bloque: 3,
                        },
                    }} 
                    className="w-[70%] lg:w-auto absolute bottom-4 left-[50%] -translate-x-[50%] text-slate-700 lg:static py-2 px-5 rounded-3xl text-center lg:text-left text-base bg-orange-50 font-medium border-[0.1rem] border-blue-700 hover:border-0 hover:bg-blue-700 transition-colors hover:text-white "
                    >Ver más</Link>
                </div>
                <div className="row-span-2 m-1 rounded-2xl p-5 bg-orange-500 hidden lg:flex justify-center items-center">
                  <span className="text-lg text-center font-medium text-white">
                    Productos de  alta calidad ¡Renueva tus suministros hoy!
                  </span>
                </div>
                <div className="relative overflow-hidden row-span-4 m-1 rounded-2xl p-5 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-300 h-[12rem] lg:h-auto">
                  <span className="mb-2 lg:mb-0 text-center lg:text-left text-xl lg:text-lg font-medium lg:font-semibold text-slate-700 block">Útiles Escolares</span>
                  <span className="text-base font-medium text-slate-600 hidden lg:block mb-5">Diversidad en productos escolares, justo lo que necesitas</span>
                  <Image priority src="https://i.postimg.cc/g08QmR8w/colores.png" alt="Útiles Escolares" width={720} height={720} className="absolute bottom-0 right-0 w-[100%] translate-x-[20%] translate-y-[45%] sm:translate-y-[65%] md:translate-x-[5%] md:translate-y-[82%] lg:translate-x-36 lg:translate-y-52 -rotate-[60deg] md:-rotate-[10deg] lg:-rotate-[60deg]"/>                
                  <Link href={{
                        pathname: '/productos',
                        query: {
                            bloque: 2,
                        },
                    }} 
                    className="w-[70%] lg:w-auto absolute bottom-4 left-[50%] -translate-x-[50%] text-slate-700 lg:static py-2 px-5 rounded-3xl text-center lg:text-left text-base bg-orange-50 font-medium border-[0.1rem] border-blue-700 hover:border-0 hover:bg-blue-700 transition-colors hover:text-white"
                    >Ver más</Link>
                </div>
                <div className="relative overflow-hidden row-span-3 m-1 rounded-2xl p-5 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 h-[12rem] lg:h-auto">
                  <span className="mb-2 lg:mb-0 text-center lg:text-left text-xl lg:text-lg font-medium lg:font-semibold text-slate-700 block">Cuentos y Juegos Didácticos</span>
                  <span className="text-base font-medium text-slate-600 hidden lg:block mb-5">Desarrolla habilidades de lectura y aprendizaje</span>
                  <Image priority src="https://i.postimg.cc/MH3Wk4jb/didactico.png" alt="Cuentos y Juegos Didácticos" width={720} height={720} className="absolute bottom-0 right-0 w-[100%] lg:w-[60%] translate-y-[20%] sm:translate-y-[43%] md:translate-y-[50%] lg:translate-x-0 lg:translate-y-[-5%]"/>                
                  <Link href={{
                        pathname: '/productos',
                        query: {
                            bloque: 4,
                        },
                    }} 
                    className="w-[70%] lg:w-auto absolute bottom-4 left-[50%] -translate-x-[50%] text-slate-700 lg:static py-2 px-5 rounded-3xl text-center lg:text-left text-base bg-orange-50 font-medium border-[0.1rem] border-blue-700 hover:border-0 hover:bg-blue-700 transition-colors hover:text-white"
                    >Ver más</Link>
                </div>
                <div className="row-span-4 m-1 rounded-2xl p-5 bg-orange-500 hidden lg:flex justify-center items-center">
                  <span className=" text-lg text-center font-medium text-white"> 
                    Encuentra la mejor variedad en artículos de papelería 
                  </span>
                </div> 
            </div>
          </div>          
        </div>
        {/*Blog section*/}
        <div className="bg-white -mt-10 lg:mt-0 z-50 lg:z-0 py-10 h-[76rem] lg:h-[35rem] overflow-hidden relative">
           <div className="hidden lg:block bg-gradient-to-br from-orange-300 via-orange-500 to-orange-600 rounded-3xl h-[30rem] w-9/12 ml-[50%]"></div>
           <PreviewBlog/>
        </div>
        {/*instagram section*/}
        <div className="w-9/12 mx-auto grid grid-cols-1 lg:mt-10 mb-20 lg:mb-5">
          <div className="flex justify-center pt-5 mb-5 text-blue-700">
            <h2 className="grid justify-items-center font-medium text-2xl lg:text-4xl lg:flex">Siguenos en <strong className=" font-semibold lg:ml-2 grid justify-items-center text-orange-500">Instagram</strong></h2>                
          </div>
          <h3 className="grid justify-items-center mb-10 text-lg lg:text-2xl text-center text-blue-700">Descubre las mejores marcas, consejos y tips para desarrollar tu creatividad</h3>
          <InstagramEmbedded/>
        </div>         
        {/*extracto nosotros 4*/} 
        <div 
          className={`${styles.translateYcustom}`}
          style={{
            backgroundImage: `url('https://i.postimg.cc/P5nZ2NPj/background-Orange-Ym2group.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '37rem',
          }}
        >
          {/*divisor 4*/}
          <div className={`hidden lg:block ${styles.customShapeDividerTop}`}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div> 
          <div className="relative">
            <div className="w-9/12 mx-auto absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[10%] lg:translate-y-[80%] grid grid-cols-1 lg:grid-cols-5 gap-2 ">
              <div className="col-span-3">
                <h2 className="text-5xl text-center lg:text-left lg:text-7xl font-extrabold text-orange-300 uppercase">nosotros</h2>
                <h3 className="text-2xl text-center lg:text-left lg:text-3xl text-white font-bold -mt-8 ml-8">ym2 papelería</h3>
                <article className="text-base text-center lg:text-left text-white line-clamp-3 mt-5 mb-8 lg:w-5/6">
                Desde suministros de oficina hasta artículos para el colegio. Siempre nos esforzamos por mantenernos actualizados con las últimas tendencias y productos para que puedas encontrar todo lo que necesites en un solo lugar...
                </article>
                <Link href='/nosotros'
                      className="py-2 px-5 rounded-3xl flex justify-center lg:inline-block text-base bg-orange-500/25 font-medium border-[0.1rem] border-white hover:border-0 hover:bg-blue-700 transition-colors text-white "
                >Leer más</Link>                
              </div>
              <div className="col-span-2 mt-6 lg:mt-0">
                <Image priority src="/img/ym2img.svg" width={250} height={150} alt='local de la papeleria ym2' className=" shadow-md shadow-warning-300 rounded-3xl object-cover w-[25rem] h-[15rem] "/>
              </div>
            </div>
          </div>  
          <div className={`hidden lg:block ${styles.customShapeDividerBottom}`}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
        {/*marcas con las que trabaja la empresa*/} 
        <div className="w-9/12 mx-auto mb-28">           
          <div className="flex justify-center mb-5 text-blue-700">
            <h2 className="grid justify-items-center font-medium text-2xl lg:text-4xl lg:flex">Te ofrecemos <strong className=" font-semibold lg:ml-2 grid justify-items-center text-orange-500">marcas</strong>&nbsp;de calidad</h2>                
          </div>
          <h3 className="grid justify-items-center text-lg lg:text-2xl text-center text-blue-700">Nuestro compromiso es ofrecerte solo marcas de calidad que han demostrado su excelencia en el mercado</h3>
          <div className=" overflow-hidden mt-10">
            <CarrouselInfinitoMarcas/>
          </div>
        </div>
        {/*formulario para subscripción*/}
        <div 
          className={`${styles.translateYcustom} -mb-12`}
          style={{
            backgroundImage: `url('https://i.postimg.cc/ZRzkhzgk/formas-Ond-Abstracta.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '37rem',
          }}
        >
          <div className={`${styles.customTriangledividerTop}`}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
            </svg>
          </div>
          <div className="w-9/12 mx-auto">            
            <div className="flex justify-center pt-20 mb-5 text-blue-700">
              <h2 className="grid justify-items-center font-medium text-2xl lg:text-4xl lg:flex">Únete a la <strong className=" font-semibold lg:ml-2 grid justify-items-center text-orange-500">newsletter</strong>&nbsp;semanal</h2>                
            </div>
            <h3 className="grid justify-items-center mb-10 text-lg lg:text-2xl text-center text-blue-700">Y mantente informado sobre nuestros descuentos, nueva mercancía y mucho más...</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 ">
              <div className="hidden lg:flex justify-end -mr-[60px] items-center col-span-2">
                <Image priority src="https://i.postimg.cc/XJsqhtyK/Hand-of-businessman-holding-paper-plane.png" width={1080} height={720} quality={100} alt='Subscribete a nuestra newsletter' className="object-cover w-[25rem] h-[15rem] "/> 
              </div>
              <div className="flex justify-center lg:justify-start col-span-2 lg:mt-10 lg:-ml-10">  
                <FormularioDeSubscripcion/>            
              </div>              
            </div>
            <div className="p-2 h-[4rem]">
            </div>
          </div>
        </div>

      </Layout>
    </>
  )
}
