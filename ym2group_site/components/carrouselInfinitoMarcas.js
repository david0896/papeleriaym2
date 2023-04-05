import Image from "next/image"
import Link from "next/link"
import * as style from "../styles/carrouselInfinitoMarcas.module.css";

export default function CarrouselInfinitoMarcas() {

    return (
        <div className="flex">
            <div className={style.slider}>
                <div className={style.slideTrack}>
                    <div className={`${style.slide} flex justify-center items-center`}>
                        <Image src="/img/CARIBE.png" height="60" width="80" alt="logo caribe" priority/>
                    </div>
                    <div className={`${style.slide} flex justify-center items-center`}>
                        <Image src="/img/OFIMAK.png" height="100" width="250" alt="logo ofimak" />
                    </div>
                    <div className={`${style.slide} flex justify-center items-center`}>
                        <Image src="/img/KORES.png" height="100" width="250" alt="logo kores" />
                    </div>
                    <div className={`${style.slide} flex justify-center items-center`}>
                        <Image src="/img/PRINTA.png" height="100" width="250" alt="logo printa" />
                    </div>
                    <div className={`${style.slide} flex justify-center items-center`}>
                        <Image src="/img/SYSABE.png" height="100" width="250" alt="logo sysabe" />
                    </div>
                </div>
            </div>
            <div className={`${style.slider} hidden md:block`}>
                <div className={style.slideTrack}>
                    <div className={`${style.slide} flex justify-center items-center`}>
                        <Image src="/img/SYSABE.png" height="100" width="250" alt="logo sysabe" />
                    </div>
                    <div className={`${style.slide} flex justify-center items-center`}>
                        <Image src="/img/PRINTA.png" height="100" width="250" alt="logo printa" />
                    </div>
                    <div className={`${style.slide} flex justify-center items-center`}>
                        <Image  src="/img/CARIBE.png" height="60" width="80" alt="logo caribe"/>
                    </div>
                    <div className={`${style.slide} flex justify-center items-center`}>
                        <Image src="/img/KORES.png" height="100" width="250" alt="logo kores" />
                    </div>
                    <div className={`${style.slide} flex justify-center items-center`}>
                        <Image src="/img/OFIMAK.png" height="100" width="250" alt="logo ofimak" /> 
                    </div>   
                </div>
            </div>
        </div>
    )
}