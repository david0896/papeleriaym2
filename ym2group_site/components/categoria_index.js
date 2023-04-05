import Image from "next/image"
import Link from "next/link"

export default function Categoria_index({categoria}) {

    const {id, imagen, titulo, url} = categoria;

    return ( 
        <div className="lg:basis-1/5 py-5 mt-10">
              <div className="overflow-hidden mx-auto bg-red-400 w-2/6 lg:w-3/4 h-2/6 lg:h-3/4 cursor-pointer rounded-xl relative group ">
                <Link
                    href={{
                        pathname: url,
                        query: {
                            bloque: id,
                        },
                    }} 
                    className="rounded-xl z-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute h-full bg-orange-500/80 inset-x-0  text-white flex items-center grid justify-items-center"
                >
                            <div>
                                <div
                                    className="transform-gpu  p-4 space-y-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 content-center items-center transform transition duration-300 ease-in-out"
                                >
                                    <div className="opacity-60 font-semibold">
                                      <svg xmlns="http://www.w3.org/2000/svg" 
                                           fill="none" 
                                           viewBox="0 0 24 24" 
                                           strokeWidth="1.5" 
                                           stroke="currentColor" 
                                           className="w-20 h-20">
                                        <path strokeLinecap="round" 
                                              strokeLinejoin="round" 
                                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                      </svg>
                                    </div>
                                </div>
                            </div>
                </Link>
                <Image
                    className="object-cover w-full h-full h-auto aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                    src={imagen}
                    width={40} 
                    height={40} 
                    alt={titulo} 
                />
              </div>
              <div className="text-center text-xl font-semibold pt-5 text-white">{titulo}</div>
            </div>
    )
}