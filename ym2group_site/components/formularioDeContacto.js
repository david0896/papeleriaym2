import { useState } from 'react';
import axios from 'axios';

export default function FormularioDeContacto() {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState(''); 
    const [mensaje, setMensaje] = useState('');

    const [enviado, setEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState(null);
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnviando(true);
        setError(null);
        try {
            await axios.post('/api/sendEmail', {
                nombre,
                correo,
                mensaje
            });
            setEnviado(true);
            setEnviando(false);
        } catch (error) {
            setError(error);
            setEnviado(false);
            setEnviando(false);
        }
    };

    return (
        <>
            <div>
                {enviado 
                    ? <p>¡Mensaje enviado!</p> 
                    : 
                    <form className=" rounded-2xl lg:border-2 lg:border-gray-300 mt-5 lg:p-10" onSubmit={handleSubmit}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <label htmlFor="nombre" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                id="correo"
                                name="correo"
                                value={correo}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        <label htmlFor="correo" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail</label>
                        </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={mensaje}
                            className="resize-y block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            onChange={(e) => setMensaje(e.target.value)}
                        />
                        <label htmlFor="mensaje" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje</label>
                    </div>
                    {enviando 
                        ? <p>Enviando mensaje...</p>
                        : <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>

                    }
                    {error && <p>Ocurrió un error al enviar el mensaje. Por favor, intente nuevamente.</p>}
                    </form>
                }
            </div>
        </>

    )
}