import { useState } from 'react';
import { User } from "../../assets/svg/User.jsx"
import { Block } from "../../assets/svg/Block.jsx"
import { Desactived } from "../../assets/svg/Desactived.jsx"
import { Key } from "../../assets/svg/Key.jsx"

export const GridConfigurations = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (activeAccordion === index) {
            setActiveAccordion(null); // Close accordion if already open
        } else {
            setActiveAccordion(index); // Open accordion
        }
    };

    const accordionItems = [
        {
            title: 'Información de la cuenta',
            description: 'Ve la informacion de tu cuenta, como el numero de telefono y correo electronico .',
            svg: <User />,
            content: (
                <div className='flex flex-col gap-3 justify-center items-start ml-20 mt-5'>
                    <div className='flex flex-col'>
                        <p className='text-1xl font-semibold'>Numero de telefono:</p>
                        <p className='text-[#5F5F5F]'>{1138192126}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-1xl font-semibold'>Correo electronico:</p>
                        <p className='text-[#5F5F5F]'>soyagvs@gmail.com</p>
                    </div>
                    <button className='w-24 h-10 bg-blue-400 rounded-md text-white'>Guardar</button>
                </div>
            ),
        },
        {
            title: 'Cambio de contraseña',
            description: 'Puedes cambiar tu contraseña y mantener segura tu cuenta .',
            svg: <Key />,
            content: (
                <div className='flex flex-col gap-3 justify-center items-start ml-20 mt-5'>
                    <form action="" className='flex flex-col gap-3'>
                        <div>
                            <input type="text" placeholder='Contraseña actual .' className='border rounded-md w-52 h-11 p-2' />
                            <p className='text-xs text-[#B25CD6]'>Olvidaste tu contraseña?</p>
                        </div>

                        <input type="text" placeholder='Nueva contraseña' className='border rounded-md w-52 h-11 p-2' />
                        <div>
                            <input type="text" placeholder='Confirmar contraseñar' className='border rounded-md w-52 h-11 p-2' />
                            <p className='text-[#5F5F5F] text-sm font-semibold'>Si cambias tu contraseña recuerda que una ves de cambiarla debes esperar 14 dias para poder volverlo a hacer .</p>
                        </div>
                    </form>
                    <button className='w-40 h-10 bg-blue-400 rounded-md text-white'>Cambiar contraseña</button>

                </div>
            ),
        },
        {
            title: 'Desactivar cuenta',
            description: 'Entra aqui para ver como poder desactivar tu cuenta .',
            svg: <Desactived />,
            content: (
                <div className='flex flex-col gap-5 justify-center items-start ml-20 mt-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-md font-semibold'>Desactivar cuenta hasta volver </p>
                        <p className='text-[#5F5F5F] text-sm font-semibold'>Si eliges esta opcion una ves al colocar tu contraseña la sesion cerrara y se mantendra desactivada hasta que vuelvas a iniciar sesion y automaticamente se activara .</p>
                        <button className='w-52 h-10 bg-blue-400 rounded-md text-white'>Desactivar hasta volver</button>

                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-md font-semibold'>Desactivar cuenta permanente</p>
                        <p className='text-[#5F5F5F] text-sm font-semibold'>Si eliges esta opcion una ves al colocar tu contraseña la sesion cerrara permanentemente y se eliminara .</p>
                        <button className='w-40 h-10 bg-red-600 rounded-md text-white'>Desactivar</button>

                    </div>
                </div>
            ),
        },
        {
            title: 'Cuentas bloqueadas',
            description: 'En esta seccion podras ver las cuentas bloqueadas .',
            svg: <Block />,
            content: (
                <div className='flex flex-col gap-5 justify-center items-start ml-20 mt-5'>
                    <p>usuarios bloqueados</p>
                </div>
            ),
        }
    ];

    return (
        <div className="w-[570px] bg-white rounded-xl mt-4">
            <div className="flex flex-col w-[500px] justify-center mt-4">
                <h2 className="flex justify-start items-center font-bold text-3xl p-5">
                    Configuración de la cuenta
                </h2>
                <div className="w-[500px] pl-5">
                    {accordionItems.map((item, index) => (
                        <div key={index}>
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-center items-center font-bold text-md p-5"
                            >
                                <div className="flex flex-col justify-center items-start">
                                    <div className="flex gap-1">
                                        <div className='flex flex-col'>
                                            <p className='flex gap-1'>
                                                {item.svg}
                                                {item.title}
                                            </p>
                                            <p className="text-[#5F5F5F] text-start ml-7">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            {activeAccordion === index && (
                                <div className="modal">
                                    <div className="modal-content">
                                        {item.content}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-start items-center">
                    <a
                        href="/support"
                        className="flex justify-start items-center font-bold text-3xl p-5 gap-5"
                    >
                        Centro de ayuda
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                    </a>
                </div>
            </div>
        </div>
    );
};
