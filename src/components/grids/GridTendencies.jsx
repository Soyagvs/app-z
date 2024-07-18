import { useState } from 'react';

export const GridTendencies = () => {
    const [isGlobal, setIsGlobal] = useState(true);

    const globalTendencies = [
        { name: "Tendencia Global 1", count: 1000 },
        { name: "Tendencia Global 2", count: 900 },
        { name: "Tendencia Global 3", count: 800 },
        { name: "Tendencia Global 4", count: 700 },
        { name: "Tendencia Global 5", count: 600 },
        { name: "Tendencia Global 6", count: 500 },
        { name: "Tendencia Global 7", count: 400 },
        { name: "Tendencia Global 8", count: 300 },
        { name: "Tendencia Global 9", count: 200 },
        { name: "Tendencia Global 10", count: 100 }
    ];

    const localTendencies = [
        { name: "Tendencia Local 1", count: 150 },
        { name: "Tendencia Local 2", count: 140 },
        { name: "Tendencia Local 3", count: 130 },
        { name: "Tendencia Local 4", count: 120 },
        { name: "Tendencia Local 5", count: 110 },
        { name: "Tendencia Local 6", count: 100 },
        { name: "Tendencia Local 7", count: 90 },
        { name: "Tendencia Local 8", count: 80 },
        { name: "Tendencia Local 9", count: 70 },
        { name: "Tendencia Local 10", count: 60 }
    ];

    const tendencies = isGlobal ? globalTendencies : localTendencies;

    return (
        <article className="w-[240px] h-[650px] bg-white rounded-xl">
            <div className="flex p-2 justify-center items-center">
                <h3 className="text-lg font-bold">Tendencias:{isGlobal ? <span className='border-b border-b-purple-400'>Global</span> : <span className='border-b border-b-purple-400'>Local</span>}</h3>
                <p className="text-[#B25CD6] text-lg">∙</p>
                <button
                    className="text-[#B25CD6] text-base"
                    onClick={() => setIsGlobal(!isGlobal)}
                >
                    Cambiar
                </button>
            </div>
            <div className="flex flex-col justify-center items-start ml-5">
                {tendencies.map((tendency, index) => (
                    <div key={index} className="mb-2">
                        <button>
                            <p className="font-bold">{index + 1}. {tendency.name}</p>
                            <p className="text-[#5F5F5F]">{tendency.count} hashtags usados</p>
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="border-black border w-52"></div>
                <p className="text-[#B25CD6] mt-2">Visita las tendencias</p>
            </div>
        </article>
    );
};
