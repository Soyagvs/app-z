import React, { useState } from 'react';

export const UserComponent = ({ user, onDelete }) => {
    const [following, setFollowing] = useState(false);
    const [followedIcon, setFollowedIcon] = useState(false); // Estado para cambiar el ícono del botón
    const [deleted, setDeleted] = useState(false); // Estado para controlar si el usuario está eliminado

    const toggleFollow = () => {
        setFollowing(!following);
        setFollowedIcon(!following); // Cambia el ícono al estado opuesto
    };

    const deleteUser = () => {
        setDeleted(true); // Marcar el usuario como eliminado
        onDelete(user); // Llamar a la función onDelete para eliminar el usuario de la lista (puedes implementar esto en GridUsers)
    };

    return (
        <div className={`flex justify-center items-center gap-2 mb-2 ${deleted ? 'opacity-50' : ''}`}>
            <img src={user.avatar} alt={user.name} className="w-10 h-10 bg-slate-400 rounded-full " />
            <div className="-space-y-2">
                <h3 className="text-sm font-semibold">{user.name}</h3>
                <p className="text-[#5F5F5F] text-sm">@{user.username}</p>
            </div>
            {!deleted && (
                <>
                    <button onClick={toggleFollow}>
                        {followedIcon ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                                />
                            </svg>
                        )}
                    </button>
                    <button onClick={deleteUser}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </>
            )}
            {deleted && <p className="text-red-500">Usuario eliminado</p>}
        </div>
    );
};
