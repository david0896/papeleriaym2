import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from '../styles/styles.module.css'
import FormularioDeSubscripcion from "./formularioDeSubscripcion";


export default function ModalEmergente() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      setIsOpen(true); // Abre el modal automáticamente al cargar la página
    }, []);

    Modal.setAppElement("#__next"); // elemento raíz 
  
    const closeModal = () => {
      setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className={`${styles.Modal} relative`}
            overlayClassName={`${styles.Overlay}`}
        >
            <div className="flex justify-end">
                <button onClick={closeModal} className="text-gray-500 bg-white/80 rounded-full p-2 mt-4 mr-4 lg:mt-10 lg:mr-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button>
            </div>
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[10%] lg:top-[60%] lg:left-[60%] lg:-translate-x-[30%] lg:-translate-y-[50%]">
                <FormularioDeSubscripcion/>
            </div>
        </Modal> 
    )
}