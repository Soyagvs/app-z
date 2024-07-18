import { useState } from 'react';

export const GridProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState('Esta es una pequeña descripcion del perfil');
    const [location, setLocation] = useState('Buenos Aires. Ar');
    const [linkText, setLinkText] = useState('http:localhost:4321/vercel.app');

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <article
            className="w-[236px] h-[245px] bg-white flex flex-col justify-center items-center rounded-xl mt-4"
        >
            <div className="flex justify-center items-start pt-2">
                <div className="flex flex-col justify-center items-start">
                    <h2 className="text-base font-semibold">Agustin Martinez</h2>
                    <p className="text-sm">@soyagvs</p>
                </div>
            </div>

            <div className="flex justify-center items-center pt-3 pb-3">
                {isEditing ? (
                    <textarea
                        className="w-40 resize-none"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                ) : (
                    <p className="w-40 text-sm">{truncateText(description, 30)}</p>
                )}
                <button onClick={handleEditToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-between items-start pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {isEditing ? (
                    <input
                        type="text"
                        className="text-blue-300"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                ) : (
                    <span className="text-blue-300">{truncateText(location, 20)}</span>
                )}
            </div>

            <div className="flex justify-center items-start pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                {isEditing ? (
                    <input
                        type="text"
                        value={linkText}
                        onChange={(e) => setLinkText(e.target.value)}
                    />
                ) : (
                    <a href="">{truncateText(linkText, 20)}</a>
                )}
            </div>

            <div className="flex justify-center items-center pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <p className="text-sm">creada el 27/01/99</p>
            </div>
        </article>
    );
};
