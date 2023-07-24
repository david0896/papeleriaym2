import Layout from "@/components/layout"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Index({productos}) {

    console.log(productos)

    return (
        <Layout 
        title={'| Tienda'}
        description={'Te ofrecemos productos de calidad'} >
            <h1>Stock de productos</h1>
            <div className="m-5">
                {productos?.map(producto =>(
                    <h1>{producto.attributes.name}</h1>
                ))}
            </div>
        </Layout>
)}

export async function getStaticProps(){
    const respuesta  = await fetch(`https://strapi-production-86ae.up.railway.app/api/products`)
    const {data : productos } = await respuesta.json()

    console.log(productos)

    return {
        props: {
            productos
        }
    }
}
