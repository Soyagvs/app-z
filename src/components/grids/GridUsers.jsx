import { UserComponent } from '../ui/UserComponent';

export const GridUsers = () => {
    const users = [
        // Simula una lista de usuarios
        { name: 'Usuario 1', username: 'usuario1', avatar: '/user.png' },
        { name: 'Usuario 2', username: 'usuario2', avatar: '/user.png' },
        { name: 'Usuario 3', username: 'usuario3', avatar: '/user.png' },
    ];

    return (
        <article className="w-[240px] bg-white rounded-xl h-[230px] mt-4">
            <div className="flex justify-center items-center pt-2 ">
                <h3 className="text-lg font-bold">A quien seguir</h3>
                <p className="text-[#B25CD6] text-xl">∙</p>
                <button className="text-[#B25CD6] text-base">Actualizar</button>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center mt-3">
                {users.map((user, index) => (
                    <UserComponent key={index} user={user} />
                ))}
            </div>
        </article>
    );
};
