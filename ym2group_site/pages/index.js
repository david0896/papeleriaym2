import { useState } from "react";
import Layout from "@/components/layout"
import Link from "next/link"
import Image from "next/image";
import styles from '../styles/styles.module.css'
import Categoria_index from "@/components/categoria_index";
import CarrouselInfinitoMarcas from "@/components/carrouselInfinitoMarcas";
import ProductosEnPromocion from "@/components/productosEnPromocion";
import dynamic from 'next/dynamic';
import CarouselNext from "@/components/carrouselNext";

const InstagramEmbedded = dynamic(() => import('@/components/instagramEmbedded'), {
  ssr: false,
});

let arrCategoriasProductos = [
  {
      id: 1,
      imagen: '/img/articulosdeoficina.svg',
      titulo: 'Artículos de Oficina',
      url: '/productos'
  },
  {
    id: 2,
    imagen: '/img/articulosescolares.svg',
    titulo: 'Útiles Escolares',
    url: '/productos'
  },
  {
    id: 3,
    imagen: '/img/bolsosymorrales.svg',
    titulo: 'Morales y Bolsos',
    url: '/productos'
  },
  {
    id: 4,
    imagen: '/img/librosyjuegosludicos.svg',
    titulo: 'Cuentos y Juegos Didácticos',
    url: '/productos'
  } 
];

export default function Home() {

  const [categorias, setCategorias] = useState(arrCategoriasProductos);

  return (
    <>
      <Layout
        title={'| Inicio'}
        description={'Venta de articulos de papelería'}
      >
        {/*carousel*/}
        <CarouselNext/> 
        {/*section 1 productos en promoción*/}
        <ProductosEnPromocion/> 
        {/*divisor 1*/}
        <div className={styles.triangle}></div>
        {/*section 1 categorias de productos*/}
        <div className=" bg-blue-700 py-28">
          <div className="flex justify-center">
            <h2 className="grid justify-items-center text-2xl text-white lg:flex">El mundo en <span className=" font-bold block lg:ml-2 grid justify-items-center">categorías</span></h2>                
          </div>
          <div className='flex flex-col lg:flex-row justify-center lg:container lg:mx-auto'>
            {   
              categorias.map(categoria =>(
                <Categoria_index
                    categoria={categoria}
                    key={categoria.id}
                />
              ))
            }
          </div>
        </div>
        {/*divisor 2*/}
        <div className={styles.triangleup}></div>
        {/*instagram section*/}
        <div className="grid grid-cols-1 mt-20">
          <InstagramEmbedded/>
        </div>
        {/*divisor 4*/} 
        <section className={styles.curved}></section>
        {/*extracto nosotros 4*/} 
        <div className="">
          <div className={`${styles.translateYcustom} bg-orange-500 `}> 
            <div className="container mx-auto flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/4 lg:h-80 flex justify-center lg:justify-end lg:relative mt-14">
                <Image src="/img/ym2img.svg" width={250} height={40} priority alt='ym2 foto' className=" lg:shadow-2xl w-32 lg:w-56 lg:absolute border-15 border-white"/>
              </div> 
              <div className="w-full lg:w-3/4 lg:mt-14 lg:h-80">
                <div className=" py-6 px-12 text-center lg:text-left text-3xl font-bold text-white">Nosotros</div>
                <div className="px-12 pb-6 text-center lg:text-left text-base lg:text-base xl:text-lg text-white">
                  <article>
                  Desde suministros de oficina hasta artículos para el colegio. Siempre nos esforzamos por mantenernos actualizados con las últimas tendencias y productos para que puedas encontrar todo lo que necesites en un solo lugar.
                  </article>
                </div>
                <div className="text-xl flex justify-center lg:justify-start px-12 text-orange-500">
                  <Link href="/nosotros">
                    <button className=" rounded-3xl bg-white py-2 px-8 mb-20 lg:mb-0">Leer más</button>
                  </Link>
                </div>
              </div> 
            </div>
          </div>
        </div>
        {/*marcas con las que trabaja la empresa*/} 
        <div className="p-10 mt-10"> 
          <div className="flex justify-center mb-5">
            <h2 className="grid justify-items-center text-2xl text-blue-700 lg:flex">Te ofrecemos <span className=" font-bold block lg:ml-2 grid justify-items-center text-orange-500">marcas</span>&nbsp;de calidad</h2>                
          </div>
          <div className=" overflow-hidden">
            <CarrouselInfinitoMarcas/>
          </div>
        </div>
        {/*formulario para subscripción*/}
        <div className="p-10 mb-20">
          <div className="flex justify-center mb-5">
            <h2 className="grid justify-items-center text-2xl text-blue-700 lg:flex">Comunidad <span className=" font-bold block lg:ml-2 grid justify-items-center text-orange-500">YM2 GROUP</span></h2>                
          </div>
          <div className="flex justify-center ">
            <h5 className="grid justify-items-center text-center text-lg text-blue-700">mantente informado sobre nuestros descuentos, mercancía nueva y mucho más...</h5>                
          </div>
          <div className="p-2 h-16 flex justify-center relative">
            <iframe width="540" height="240" src="https://faed66c7.sibforms.com/serve/MUIEAMK_qALD6Y5MO3x0pwNe7w_1v7HOUd5bPpQd97tiAc0oXgbQAAfB13u3Dn71mL-ujsAj26ZfG9_dYc8xjVj0dOL1pbuRGkh3wSEGeanylUqjsvWcUfxxoKeuq1y910s7RqxNczu3uL29BDRvZrhXvO7azfrQkDR0cN0IrFtgplhDWVrwQElZ0gzAJnpO-dg-n6O9v77y0eYE" frameBorder="0" style={{'overflow-y': 'hidden'}}></iframe>
          </div>
          <div className="p-2 h-40 flex justify-center">
          </div>
        </div>

      </Layout>
    </>
  )
}