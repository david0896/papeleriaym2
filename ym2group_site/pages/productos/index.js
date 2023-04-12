import Layout from "@/components/layout"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import HeaderParallaxBanner from "@/components/headerParallaxBanner";
import ProductosEnPromocion from "@/components/productosEnPromocion";
import TablaSubCategoriasProductos from "@/components/tablaSubCategoriasProductos";

let dataAcordion1 = [
  {
    id: 1,
    subcategoria: "AGENDAS Y DIARIOS"
  },{
    id: 2,
    subcategoria: "ALMOHADILLAS"
  },{
    id: 3,
    subcategoria: "SELLOS Y TINTAS"
  },{
    id: 4,
    subcategoria: "ARCHIVO"
  },{
    id: 5,
    subcategoria: "CARPETAS"
  },{
    id: 6,
    subcategoria: "SEPARADORES"
  },{
    id: 7,
    subcategoria: "FUNDAS"
  },{
    id: 8,
    subcategoria: "CAJA DE EFECTIVO"
  },{
    id: 9,
    subcategoria: "CALCULADORAS"
  },{
    id: 10,
    subcategoria: "CARTELERAS Y PIZARRAS"
  },{
    id: 11,
    subcategoria: "CHINCHES"
  },{
    id: 13,
    subcategoria: "PALETAS Y TIZAS"
  },{
    id: 14,
    subcategoria: "CINTAS ADHESIVAS"
  },{
    id: 15,
    subcategoria: "CLIPS"
  },{
    id: 17,
    subcategoria: "CORRECTOR"
  },{
    id: 18,
    subcategoria: "ENGRAPADORAS Y GRAPAS"
  },{
    id: 19,
    subcategoria: "BOLIGRAFOS Y LAPICES"
  },{
    id: 20,
    subcategoria: "LIBROS LEGALES"
  },{
    id: 21,
    subcategoria: "LIGAS"
  },{
    id: 22,
    subcategoria: "LUPA"
  },{
    id: 23,
    subcategoria: "MARCADORES Y RESALTADORES"
  },{
    id: 24,
    subcategoria: "NOTAS ADHESIVAS"
  },{
    id: 25,
    subcategoria: "TACOS"
  },{
    id: 26,
    subcategoria: "PAPEL FOTOGRAFICOS"
  },{
    id: 27,
    subcategoria: "PAPELERAS"
  },{
    id: 28,
    subcategoria: "BANDEJAS Y ORGANIZADORES"
  },{
    id: 29,
    subcategoria: "BANDEJAS Y ORGANIZADORES"
  },{
    id: 30,
    subcategoria: "PORTA CARNETS"
  },{
    id: 31,
    subcategoria: "RESMAS"
  },{
    id: 32,
    subcategoria: "PAPEL BOND"
  },{
    id: 33,
    subcategoria: "SOBRES"
  },{
    id: 34,
    subcategoria: "TABLAS DE CHEQUEO"
  },{
    id: 35,
    subcategoria: "TIJERAS Y CUCHILLAS"
  }
]

let dataAcordion2 = [
  {
    id: 1,
    subcategoria: "BLOCK"
  },{
    id: 2,
    subcategoria: "BOLSAS DE REGALO"
  },{
    id: 3,
    subcategoria: "BORRAS"
  },{
    id: 4,
    subcategoria: "CALCULADORAS"
  },{
    id: 5,
    subcategoria: "CARTON"
  },{
    id: 6,
    subcategoria: "CARTULINA"
  },{
    id: 7,
    subcategoria: "CHINCHES"
  },{
    id: 8,
    subcategoria: "ESCARCHA"
  },{
    id: 9,
    subcategoria: "PALETAS Y TIZAS"
  },{
    id: 10,
    subcategoria: "CINTAS ADHESIVAS"
  },{
    id: 11,
    subcategoria: "CUADERNOS Y LIBRETAS"
  },{
    id: 12,
    subcategoria: "BOLIGRAFOS Y LAPICES"
  },{
    id: 13,
    subcategoria: "ETIQUETAS"
  },{
    id: 14,
    subcategoria: "CALCOMANIAS"
  },{
    id: 15,
    subcategoria: "FICHAS"
  },{
    id: 17,
    subcategoria: "FOAMY"
  },{
    id: 18,
    subcategoria: "FIELTRO Y ESTAMBRE"
  },{
    id: 19,
    subcategoria: "HOJAS PONCHADAS - EXAMEN"
  },{
    id: 20,
    subcategoria: "MARCADORES Y RESALTADORES"
  },{
    id: 21,
    subcategoria: "MASA MOLDEABLE Y PLASTILINA"
  },{
    id: 22,
    subcategoria: "NOTAS ADHESIVAS"
  },{
    id: 23,
    subcategoria: "TACOS"
  },{
    id: 24,
    subcategoria: "PALETAS Y PALILLOS"
  },{
    id: 25,
    subcategoria: "PAPEL KRAFT"
  },{
    id: 26,
    subcategoria: "PAPELES Y CINTAS DE REGALO"
  },{
    id: 27,
    subcategoria: "PEGAMENTO Y SILICONE"
  },{
    id: 28,
    subcategoria: "PELUCHE"
  },{
    id: 29,
    subcategoria: "PINTURA Y DIBUJO"
  },{
    id: 30,
    subcategoria: "PORTA PLANOS"
  },{
    id: 31,
    subcategoria: "REGLAS Y COMPÁS"
  },{
    id: 32,
    subcategoria: "RESMAS"
  },{
    id: 33,
    subcategoria: "PAPEL BOND"
  },{
    id: 34,
    subcategoria: "SACAPUNTAS"
  },{
    id: 35,
    subcategoria: "TIJERAS Y CUCHILLAS"
  },{
    id: 36,
    subcategoria: "TABLAS DE CORTE"
  }
]

let dataAcordion3 = [
  {
    id: 1,
    subcategoria: "BOLSOS SPORT"
  },{
    id: 2,
    subcategoria: "CARTUCHERAS"
  },{
    id: 3,
    subcategoria: "FORROS TABLET Y LAPTOP"
  },{
    id: 4,
    subcategoria: "LONCHERA"
  },{
    id: 5,
    subcategoria: "MORRALES"
  }
]

let dataAcordion4 = [
  {
    id: 1,
    subcategoria: "JUEGOS DIDACTICOS"
  },{
    id: 2,
    subcategoria: "CUENTOS CLÁSICOS"
  },{
    id: 3,
    subcategoria: "LIBROS PARA COLOREAR"
  }
]

export default function Index() {

    const [acordionActive1, setAcordionActive1] = useState('hidden');
    const [acordionActive2, setAcordionActive2] = useState('hidden');
    const [acordionActive3, setAcordionActive3] = useState('hidden');
    const [acordionActive4, setAcordionActive4] = useState('hidden');
    const router = useRouter();
    //const acordionShow = router.asPath === '/productos#Two' ? '' : 'hidden';
    const {bloque} = router.query

    useEffect(()=>{
		if(bloque === '1'){
            setAcordionActive1('');
            document.getElementById('headingOne').scrollIntoView({ behavior: "smooth", block: "center"});
            return
        }

        if(bloque === '2'){
            setAcordionActive2('');
            document.getElementById('headingTwo').scrollIntoView({ behavior: "smooth", block: "center"});

            return
        }

        if(bloque === '3'){
            setAcordionActive3('');
            document.getElementById('headingThree').scrollIntoView({ behavior: "smooth", block: "center"});
            return
        }

        if(bloque === '4'){
            setAcordionActive4('');
            document.getElementById('headingFour').scrollIntoView({ behavior: "smooth", block: "center"});
            return
        }
        
	})

    return (
        <Layout 
        title={'| Productos'}
        description={'Te ofrecemos productos de calidad'} 
        >        
            <HeaderParallaxBanner
                titulo={'Productos'} 
            />
            <ProductosEnPromocion/>
            <div className="lg:container lg:mx-auto lg:px-10 mb-20">
                <div id="accordionExample">
                  <div className="rounded-t-lg border border-neutral-200 bg-white">
                    <h2 className="mb-0" id="headingOne">
                      <button
                        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] "
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        Articulos de oficina
                        <strong
                          className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className={`!visible ${acordionActive1}`}
                      data-te-collapse-item
                      aria-labelledby="headingOne"
                      data-te-parent="#accordionExample">
                      <div className="py-4 px-5">
                        <TablaSubCategoriasProductos datos={dataAcordion1}/>
                      </div>
                    </div>
                  </div>
                  <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingTwo">
                      <button
                        className="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none "
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        Escolar
                        <strong
                          className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className={`!visible ${acordionActive2}`}
                      data-te-collapse-item
                      aria-labelledby="headingTwo"
                      data-te-parent="#accordionExample">
                      <div className="py-4 px-5">
                        <TablaSubCategoriasProductos datos={dataAcordion2}/>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button
                        className="group relative flex w-full items-center border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none "
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                        Bolsos, morrales, loncheras y cartucheras
                        <strong
                          className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className={`!visible ${acordionActive3}`}
                      data-te-collapse-item
                      aria-labelledby="headingThree"
                      data-te-parent="#accordionExample">
                      <div className="py-4 px-5">
                        <TablaSubCategoriasProductos datos={dataAcordion3}/> 
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white ">
                    <h2 className="accordion-header mb-0" id="headingFour">
                      <button
                        className="group relative flex w-full items-center border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none "
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour">
                        Cuentos y juegos didacticos
                        <strong
                          className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className={`!visible ${acordionActive4}`}
                      data-te-collapse-item
                      aria-labelledby="headingFour"
                      data-te-parent="#accordionExample">
                      <div className="py-4 px-5">
                        <TablaSubCategoriasProductos datos={dataAcordion4}/> 
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </Layout>            
    )
}