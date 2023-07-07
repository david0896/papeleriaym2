import Image from "next/image";
import Link from "next/link";

export default function PreviewBlog() {

    
    return (

        <div className="w-9/12 mx-auto h-auto lg:h-4/6 absolute top-0 lg:top-[50%] left-[50%] -translate-x-[50%] translate-y-0 lg:-translate-y-[50%]">
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10 h-auto content-center">
                <div className="col-span-2 mb-20 lg:mb-0">
                    <div className="flex lg:block px-6 lg:px-0">
                        <Image src='https://i.postimg.cc/hPkXTGFw/quill-pen.png' alt="icono pluma" width={512} height={512} quality={100} className="mb-5 inline-block w-1/6"/>
                        <h2 className="mb-5 text-orange-500 text-center lg:text-left font-medium text-2xl lg:text-4xl block">El rincón de la inpiración</h2> 
                    </div> 
                    <article className="text-lg lg:text-2xl text-center lg:text-left mb-7">
                        Descubre artículos llenos de inspiración y consejos útilies en nuestro blog
                    </article> 
                    <Link href='https://blog.ym2papeleria.com/'
                        className=" w-[100%] lg:w-auto py-2 px-5 rounded-3xl flex justify-center lg:inline-block text-base bg-orange-500 font-medium hover:border-[0.1rem] hover:border-orange-500 hover:bg-white transition-colors text-white hover:text-orange-500"
                    >Ver ahora</Link>
                                 
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">
                        <div className="col-span-1 w-full rounded-2xl lg:shadow-xl bg-white">
                            <Image src="https://i.postimg.cc/Hs9xK1Vv/ni-os-Leyendo-Un-Libro.jpg" alt="imagen referencial de un post del blog" width={1080} height={720} quality={100} className="h-[10rem] object-cover rounded-t-2xl"/>
                            <div className="bg-white p-4">
                                <h3 className="mb-2 text-base font-semibold">Cuentos infantiles para mejorar la lectura de tus hijos</h3>
                                <article className="mb-2 text-sm text-slate-900">
                                ¿Sabías que los cuentos infantiles pueden ser una herramienta poderosa para ayudar a tus hijos a mejorar su lectura? 
                                <br/><br/> Entérate cómo hacerlo en este artículo<br/>
                                <Link className="text-orange-500 hover:text-slate-700 font-medium text-lg" href="https://blog.ym2papeleria.com/mejorar-la-lectura-con-cuentos-infantiles/">Leer más</Link>
                                </article>
                            </div>
                        </div>
                        <div className="col-span-1 w-full rounded-2xl lg:shadow-xl bg-white">
                            <Image src="https://i.postimg.cc/Hs9xK1Vv/ni-os-Leyendo-Un-Libro.jpg" alt="imagen referencial de un post del blog" width={1080} height={720} quality={100} className="h-[10rem] object-cover rounded-t-2xl"/>
                            <div className="bg-white p-4">
                                <h3 className="mb-2 text-base font-semibold">Cuentos infantiles para mejorar la lectura de tus hijos</h3>
                                <article className="mb-2 text-sm text-slate-900">
                                ¿Sabías que los cuentos infantiles pueden ser una herramienta poderosa para ayudar a tus hijos a mejorar su lectura? 
                                <br/><br/> Entérate cómo hacerlo en este artículo <br/>
                                <Link className="text-orange-500 hover:text-slate-700 font-medium text-lg" href="https://blog.ym2papeleria.com/mejorar-la-lectura-con-cuentos-infantiles/">Leer más</Link>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )}