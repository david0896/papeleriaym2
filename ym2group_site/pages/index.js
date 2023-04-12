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
          <div className="flex justify-center mb-5">
            <h5 className="grid justify-items-center text-center text-lg text-blue-700">mantente informado sobre nuestros descuentos, mercancía nueva y mucho más...</h5>                
          </div>
          <div className="p-2 h-16 flex justify-center">
            <input 
              id="searchProduct"
              type="text"
              className="p-1 bg-white border-2 border-blue-700 focus:border-blue-700 hover:border-opacity-75 w-6/12 rounded-l-3xl pl-10"
              placeholder="Correo"
              name="searchProduct"
            />
            <button type="button" className="border-2 border-blue-700 bg-blue-700 hover:opacity-90 rounded-r-3xl p-1 px-7 text-white">Enviar</button>
            <iframe width="540" height="305" src="https://faed66c7.sibforms.com/serve/MUIEAFzVLVaO_GgcH8YW6vMI2MTJoQSV68dSUnUMk-zKjc-CtglLKtZjIeU9weuTwZNzXV1grleHD_gOMOobKYzocjtHAo1J5jw_OqgytO8oH3-ySmBg_UlQ3_qoXQ6a-_IJfimQcYbNi5LnRbmL44gWE9qDtx39M990D3HzC3Q4etK8ulV6CM9aqbellOQH5qAz91fDBgzZX1cV" frameborder="0" scrolling="auto" allowfullscreen style={{display: 'block', 'margin-left': 'auto', 'margin-right': 'auto', 'max-width': '100%'}}></iframe>
            <iframe width="540" height="305" src="https://faed66c7.sibforms.com/serve/MUIEAJ7O_n-O39-qO0uPEr-3JBt0mC8q7TUs2wOzyAjBPbgoDy4aQH_VhxngBtzjTELN3RpMaEmz9mh0a65knSWCkcsTn0IniHAjwdV3gNEYUm4c7LTKc2ye1d4t7tLt7HionO9pu3ER3IqzQEAcHWVRZ1u4KXfjCfDL0pjY2cI94SM5BYwtTSFCz9uOZC51OxST85kdmhdnSFzk" frameborder="0" scrolling="auto" allowfullscreen style={{display: 'block','margin-left': 'auto','margin-right': 'auto','max-width': '100%'}}></iframe>
          </div>
        </div>

      </Layout>
    </>
  )
}
