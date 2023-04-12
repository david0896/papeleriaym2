import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function TablaSubCategoriasProductos({datos}) {

    const [datosSort, setDatosSort] = useState([]) 

    useEffect(() => {
        const datosOrdenados = [...datos].sort((a, b) => {
            const subcategoriaA = a.subcategoria.toUpperCase(); // ignore upper and lowercase
            const subcategoriaB = b.subcategoria.toUpperCase(); // ignore upper and lowercase
            if (subcategoriaA < subcategoriaB) {
              return -1;
            }
            if (subcategoriaA > subcategoriaB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });

          setDatosSort(datosOrdenados);
    }, [])
    

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                    <thead
                        className="border-b bg-white font-medium">
                        <tr>
                        <th scope="col" className="px-6 py-4">Producto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {                 
                            datosSort.map(dato =>(                                
                                <tr
                                    key={dato.id}
                                    className="border-b bg-white transition duration-300 ease-in-out hover:bg-neutral-100"
                                >
                                    <td className="whitespace-nowrap px-6 py-4">{dato.subcategoria}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}