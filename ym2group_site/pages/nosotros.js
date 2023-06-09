import Layout from "@/components/layout"
import Image from "next/image";
import { ParallaxBanner, Parallax } from "react-scroll-parallax"; 
import HeaderParallaxBanner from "@/components/headerParallaxBanner";
import * as style from "../styles/verticalParallax.module.css";

export default function Nosotros() {
  return (
    <Layout 
        title={'| Nosotros'}
        description={'Sobre nosotros, venta de articulos de papelería'}
    >
        {/* <ParallaxBanner
          layers={[
            { image: 'img/BG-background.jpg', speed: -20 },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                </div>
              ),
            },
            { image: 'img/BG-foreground.png', speed: -10 },
          ]}
          className="aspect-[2/1]"
        /> */}
        <HeaderParallaxBanner
          titulo={'Nosotros'}
        />
        <div className="lg:container lg:mx-auto">
          <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-4">
            <div className="md:col-span-2 p-10 lg:h600 grid content-center">
              <h2 className="block text-2xl lg:text-5xl font-bold py-3">
                Somos tu aliado en el colegio, en la oficina y en tu día a día
              </h2>
              <p className="block text-lg py-3">
              Bienvenidos a nuestra papelería, ubicada en el corazón de <strong className="font-semibold">chacao</strong> desde el año 2022 en nuestra tienda fisica y más de 5 años de manera online. Nos enorgullece formar parte de la comunidad local así como de nuestros clientes y aliados que han sido parte de los momentos más importantes de YM2 GROUP C.A.
              </p>
            </div>           
            <div className='md:col-span-2 p-4 lg:p-10 lg:h-600'> 
              <div className={style.root}>
                <div className={style.container}>
                  <Parallax translateY={[70, -100]} className={style.ring}>
                    <Image width={40} height={40} src='/img/imga3.svg' alt="Imagen decorativa" priority className={style.ring2}/>
                  </Parallax>
                  <Parallax translateY={[30, -70]} className={style.circle}>
                    <Image width={40} height={40} src='/img/imga1.svg' alt="Imagen decorativa" priority  className={style.circleInner} />
                  </Parallax>
                  <Image width={40} height={40} src='/img/imga2.svg' alt="Imagen decorativa" priority className={style.hemispheres}/>
                </div>
              </div>
            </div>          
          </div>
        </div>
        <div className=" bg-orange-50 mt-28">
          <div className="bg-[url('/img/bgFormasGris.svg')] bg-cover mt-16 pt-16">
            <div className="lg:container lg:mx-auto">
              <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-4"> 
                <div className="md:col-span-2 p-10 grid content-center">
                  <h2 className="text-2xl lg:text-5xl font-semibold">
                    Nos especializamos en ofrecer una amplia gama de productos de papelería de alta calidad
                  </h2>
                </div>          
                <div className="md:col-span-2 p-10 pt-0 lg:pt-10 grid content-center">
                  <p className="block text-lg py-3">
                    Desde suministros de oficina hasta artículos para el colegio. Siempre nos esforzamos por mantenernos actualizados con las últimas tendencias y productos para que puedas encontrar todo lo que necesites en un sólo lugar.
                  </p>
                  <p className="block text-lg py-3">
                    Además, nuestro equipo de expertos en atención al cliente está a tu disposición para ayudarte en todo momento. Brindamos un servicio personalizado y amigable, para que puedas encontrar rápidamente lo que buscas.
                  </p>
                </div>          
              </div>
              <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 p-6 space-y-10 lg:space-y-0 lg:space-x-5"> 
                <div className="md:col-span-1 bg-blue-700/10 rounded-xl p-10">
                  <h3 className="block text-2xl lg:text-4xl font-bold text-blue-700">+3.700</h3>
                  <p className="block text-lg py-3">
                  Es la cantidad de seguidores que día con día crece y además están comprometidos con los productos y servicios que ofrecemos.
                  </p>
                </div>          
                <div className="md:col-span-1 bg-orange-500/20 rounded-xl p-10">
                  <h3 className="block text-2xl lg:text-4xl font-bold text-blue-700">+2.000</h3>
                  <p className="block text-lg py-3">
                    Contamos con una amplia clientela, la cual nos indica que hemos logrado ganar su confianza, a través del compromiso, responsabilidad y entrega en cada una de nuestras ventas.
                  </p>
                </div>          
                <div className="md:col-span-1 bg-blue-700/10 rounded-xl p-10">
                  <h3 className="block text-2xl lg:text-4xl font-bold text-blue-700">+1.500</h3>
                  <p className="block text-lg py-3">
                    Con nuestro stock, buscamos siempre estar actualizados con las tendencias del mercado para ofrecer productos innovadores ademas de únicos y de la mejor calidad con el mejor precio, para así diferenciar nuestra oferta en el mercado.
                  </p>
                </div>          
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-flow-row-dense grid-cols-1">
            <div className="md:col-span-1 lg:p-10">
              <div className="block mt-10 lg:-mt-20 mb-3 lg:mb-10 bg-green-400 lg:shadow-2xl lg:w-1/2 lg:mx-auto rounded-xl bg-cover aspect-[16/9] bg-[url('https://i.postimg.cc/QtC7YPFD/local-ym2group.jpg')]"></div>
              <div className="block mb-10">
                <p className="text-center">
                  Papelería YM2 group c.a.
                </p>
              </div>
            </div> 
            <div className="md:col-span-1">
              <div className="block 
                              mt-5 
                              lg:-mt-20 
                              mb-3 lg:mb-10 
                              lg:w-1/2 
                              lg:mx-auto 
              "> 
                <h4 className="lg:mt-10 mb-10 text-2x lg:text-3xl text-center font-semibold">
                Misión
                </h4>
                <p className="text-center text-lg">
                Ofrecer al mercado local y nacional, una amplia variedad de productos de papelería, artículos de oficina y útiles escolares, facilitando el proceso de compra, con opciones adecuadas a la necesidad de cada cliente, para así prestar un excelente servicio.
                </p>
                <h4 className="mt-10 mb-10 text-2x lg:text-3xl text-center font-semibold">
                Visión
                </h4>
                <p className="text-center text-lg">
                Ser líder en distribución y venta al mayor y detal, tanto local como nacional, de los rubros de papelería, artículos de oficina y útiles escolares.
                </p>
                <h4 className="mt-10 mb-10 text-2x lg:text-3xl text-center font-semibold">
                Valores
                </h4>
                <div className="flex w-full flex-wrap justify-center">                  
                  <div
                    className="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px]  items-center justify-between rounded-[21px] bg-[#eceff1] py-0 px-[12px] text-lg font-normal normal-case leading-loose text-[#4f4f4f] shadow-none  duration-300 ease-linear">
                    <Image
                      className="my-0 mr-[8px] -ml-[12px] h-[inherit] w-[inherit] rounded-[100%]"
                      src="https://i.postimg.cc/9FFRFsmj/quality.png"
                      alt="icon verified"
                      width={20}
                      height={20} />
                    Honestidad  
                  </div>
                  <div
                    className="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px]  items-center justify-between rounded-[21px] bg-[#eceff1] py-0 px-[12px] text-lg font-normal normal-case leading-loose text-[#4f4f4f] shadow-none  duration-300 ease-linear">
                    <Image
                      className="my-0 mr-[8px] -ml-[12px] h-[inherit] w-[inherit] rounded-[100%]"
                      src="https://i.postimg.cc/9FFRFsmj/quality.png"
                      alt="icon verified"
                      width={20}
                      height={20} />
                    Responsabilidad  
                  </div>
                  <div
                    className="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px]  items-center justify-between rounded-[21px] bg-[#eceff1] py-0 px-[12px] text-lg font-normal normal-case leading-loose text-[#4f4f4f] shadow-none  duration-300 ease-linear">
                    <Image
                      className="my-0 mr-[8px] -ml-[12px] h-[inherit] w-[inherit] rounded-[100%]"
                      src="https://i.postimg.cc/9FFRFsmj/quality.png"
                      alt="icon verified"
                      width={20}
                      height={20} />
                    Pasión  
                  </div>
                  <div
                    className="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px]  items-center justify-between rounded-[21px] bg-[#eceff1] py-0 px-[12px] text-lg font-normal normal-case leading-loose text-[#4f4f4f] shadow-none  duration-300 ease-linear">
                    <Image
                      className="my-0 mr-[8px] -ml-[12px] h-[inherit] w-[inherit] rounded-[100%]"
                      src="https://i.postimg.cc/9FFRFsmj/quality.png"
                      alt="icon verified"
                      width={20}
                      height={20} />
                    Transparencia     
                  </div>
                  <div
                    className="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px]  items-center justify-between rounded-[21px] bg-[#eceff1] py-0 px-[12px] text-lg font-normal normal-case leading-loose text-[#4f4f4f] shadow-none  duration-300 ease-linear">
                    <Image
                      className="my-0 mr-[8px] -ml-[12px] h-[inherit] w-[inherit] rounded-[100%]"
                      src="https://i.postimg.cc/9FFRFsmj/quality.png"
                      alt="icon verified"
                      width={20}
                      height={20} />
                    Puntualidad      
                  </div>
                  <div
                    className="mb-20 [word-wrap: break-word] my-[5px] mr-4 flex h-[42px]  items-center justify-between rounded-[21px] bg-[#eceff1] py-0 px-[12px] text-lg font-normal normal-case leading-loose text-[#4f4f4f] shadow-none  duration-300 ease-linear">
                    <Image
                      className="my-0 mr-[8px] -ml-[12px] h-[inherit] w-[inherit] rounded-[100%]"
                      src="https://i.postimg.cc/9FFRFsmj/quality.png"
                      alt="icon verified"
                      width={20}
                      height={20} />
                    Competitividad         
                  </div>
                </div>
              </div>
            </div>          
          </div>
        </div>
        <div className="hidden mt-20 mb-3 lg:mb-10 bg-green-400 w-full bg-cover aspect-[16/9] bg-[url('https://bennettfeely.com/clippy/pics/pittsburgh.jpg')]"></div>
        <div className="hidden container mx-auto mb-20">
          <div className="grid grid-flow-row-dense grid-cols-1">
            <div className="md:col-span-1">
              <div className="block
                              mb-3 lg:mb-10 
                              lg:w-1/2 
                              lg:mx-auto 
              ">
                <h4 className="mt-20 mb-10 text-2x lg:text-3xl text-center font-semibold">
                  Maecenas ex est, feugiat eget vestibulum
                </h4>
                {/* <p className="text-center mb-5">
                  Proin congue dapibus nibh, vel interdum risus consequat in. Praesent nec egestas felis. Nulla sagittis, dolor sit amet ultrices porttitor, arcu libero lobortis nunc, et convallis arcu massa sed nisl. Aliquam erat volutpat. Nulla feugiat neque consectetur dolor egestas, vel iaculis justo egestas. Fusce ultricies dolor lacinia lectus faucibus, ut tristique mauris tristique. Sed sed nunc eu justo euismod volutpat id vel neque. Cras vehicula porttitor sapien, a auctor sem tristique quis. Mauris massa ipsum, elementum nec elementum non, sodales in nunc. Nam aliquam viverra vulputate. Phasellus gravida ac ante vitae dignissim. Aliquam erat volutpat.
                </p> */}
                <p className="text-center text-lg">
                  Duis tincidunt massa ligula, eu ultricies augue posuere at. Duis vel viverra nisi. Phasellus quis viverra mauris, ac consectetur metus. Sed tincidunt ut eros non ullamcorper. Ut aliquam justo non metus placerat mollis. Nam consectetur non enim ac sollicitudin. Nam eget sem blandit, sagittis ante bibendum, tempus justo. Cras vel faucibus quam. Vestibulum eget rhoncus nibh.
                </p>
              </div>
              <div className="block 
                              mb-3 lg:mb-10 
                              lg:w-1/2 
                              lg:mx-auto 
              ">
                <h4 className="mt-10 mb-10 text-2x lg:text-3xl text-center font-semibold">
                  Maecenas ex est, feugiat eget vestibulum
                </h4>
                {/* <p className="text-center mb-5">
                  Proin congue dapibus nibh, vel interdum risus consequat in. Praesent nec egestas felis. Nulla sagittis, dolor sit amet ultrices porttitor, arcu libero lobortis nunc, et convallis arcu massa sed nisl. Aliquam erat volutpat. Nulla feugiat neque consectetur dolor egestas, vel iaculis justo egestas. Fusce ultricies dolor lacinia lectus faucibus, ut tristique mauris tristique. Sed sed nunc eu justo euismod volutpat id vel neque. Cras vehicula porttitor sapien, a auctor sem tristique quis. Mauris massa ipsum, elementum nec elementum non, sodales in nunc. Nam aliquam viverra vulputate. Phasellus gravida ac ante vitae dignissim. Aliquam erat volutpat.
                </p> */}
                <p className="text-center text-lg">
                  Duis tincidunt massa ligula, eu ultricies augue posuere at. Duis vel viverra nisi. Phasellus quis viverra mauris, ac consectetur metus. Sed tincidunt ut eros non ullamcorper. Ut aliquam justo non metus placerat mollis. Nam consectetur non enim ac sollicitudin. Nam eget sem blandit, sagittis ante bibendum, tempus justo. Cras vel faucibus quam. Vestibulum eget rhoncus nibh.
                </p>
              </div>
            </div>          
          </div>
        </div>
        
    </Layout>
  )
}


