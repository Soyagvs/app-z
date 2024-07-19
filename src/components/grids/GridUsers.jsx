import React, { useState } from 'react';
import { UserComponent } from '../ui/UserComponent';

export const GridUsers = () => {
    const [users, setUsers] = useState([
        // Simula una lista de usuarios
        { name: 'Usuario 1', username: 'usuario1', avatar: '/user.png' },
        { name: 'Usuario 2', username: 'usuario2', avatar: '/user.png' },
        { name: 'Usuario 3', username: 'usuario3', avatar: '/user.png' },
    ]);

    const fetchRandomUsers = () => {
        // Aquí deberías hacer la lógica para obtener nuevos usuarios aleatorios
        // Esto es un ejemplo, debes implementar la lógica real
        const newUsers = [
            { name: 'Nuevo Usuario 1', username: 'nuevousuario1', avatar: '/user.png' },
            { name: 'Nuevo Usuario 2', username: 'nuevousuario2', avatar: '/user.png' },
            { name: 'Nuevo Usuario 3', username: 'nuevousuario3', avatar: '/user.png' },
        ];
        setUsers(newUsers);
    };

    return (
        <article className="w-[240px] bg-white rounded-xl h-[230px] mt-4">
            <div className="flex justify-center items-center pt-2 ">
                <h3 className="text-lg font-bold">A quien seguir</h3>
                <p className="text-[#B25CD6] text-xl">∙</p>
                <button className="text-[#B25CD6] text-base" onClick={fetchRandomUsers}>
                    Actualizar
                </button>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center mt-3">
                {users.map((user, index) => (
                    <UserComponent key={index} user={user} />
                ))}
            </div>
        </article>
    );
};
