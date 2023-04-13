import Image from "next/image"
import Link from "next/link"
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/navbar'), {
  ssr: false,
});

export default function Header() {
    return (
        <header className=" z-50 sticky top-0 backdrop-blur lg:backdrop-blur-none bg-gray-100/60 lg:bg-white ">
            <div className=" hidden lg:flex mx-auto flex-wrap bg-gray-50">
                <div className="grow p-2 md:pl-10 flex space-x-3 hover:opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-orange-500" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                    <Link target="_blank" href='https://api.whatsapp.com/send/?phone=584122121462&text=Hola%20Ym2%20papelería%20quisiera%20más%20información%20sobre%20sus%20productos' className="font-medium">
                        Contacto {"("}0412{")"} 212 14 62
                    </Link>
                </div>
                <div className="w-60 p-2 grid justify-items-center">
                    {/* <Link href="/" className=" font-medium">
                        Mi cuenta
                        <svg xmlns="http://www.w3.org/2000/svg" 
                             fill="none" 
                             viewBox="0 0 24 24" 
                             strokeWidth="1.5" 
                             stroke="currentColor" 
                             className="w-6 h-6 text-orange-500 pl-1 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Link> */}  
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <Link href="https://www.facebook.com/YM2group" target="_blank" className="hover:opacity-50">
                            <svg className="w-6 fill-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            <strong className="sr-only">Facebook page</strong>
                        </Link>
                        <Link href="https://www.instagram.com/ym2groupca/" target="_blank" className="hover:opacity-50">
                            <svg className="w-6 fill-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                            <strong className="sr-only">Instagram page</strong>
                        </Link>
                    </div>                  
                </div>
            </div>  
            <div className=" hidden lg:flex container mx-auto items-center flex-wrap justify-center">
                <Link href="/" className="p-2 w-48">
                    <Image src="/img/ym2gris.svg" width={300} height={40} alt='ym2 logo'/>
                </Link>
                <div className="p-2 h-16 sm:w-2/4 xl:w-4/6 grow flex items-center justify-center">
                    {/* <input 
                        id="searchProduct"
                        type="text"
                        className="p-1 bg-white border-2 border-orange-500 focus:border-orange-500 hover:border-opacity-75 w-11/12 rounded-3xl pl-10"
                        placeholder="Busca productos YM2"
                        name="searchProduct"
                    /> */}
                    <h1 className="text-5xl text-gray-600 font-semibold italic 
                                   font-serif drop-shadow-xl shadow-black"
                    >¡Más que una papelería!</h1> 
                </div>
                <div className="p-2 h-12 grow ">
                    <Link href="/productos/descuento" className="flex mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                             fill="none" 
                             viewBox="0 0 24 24" 
                             strokeWidth="1.5" 
                             stroke="currentColor" 
                             className="w-6 h-6 text-orange-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                        <div className="block font-medium items-center leading-snug ml-3 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700"
                             data-te-ripple-init
                             data-te-ripple-color="light"
                        >Descuentos</div>
                    </Link>
                </div>
                {/* <div className="p-2 h-12 grow mx-auto">
                    <Link href="/" className="flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                             fill="none" viewBox="0 0 24 24" 
                             strokeWidth="1.5" 
                             stroke="currentColor" 
                             className="w-6 h-6 text-orange-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <div className="pl-1 text-base leading-snug text-gray-600 hover:opacity-75">Compras</div>
                    </Link>
                </div> */}
            </div> 
            <div>
                <Navbar/>
            </div>
        </header>
    )  
}