import { useState } from "react";
import { FeedTuits } from "./FeedTuits";
import { FeedResponse } from "./FeedResponse";
import { FeedReposts } from "./FeedReposts";
import { FeedMultimedia } from "./FeedMultimedia";

export const FeedHeaderProfile = () => {
    const [activeTab, setActiveTab] = useState('tuits');

    return (
        <div className="w-[570px] h-screen bg-white rounded-t-xl">
            <header className="border-b flex justify-center items-center gap-10 h-10">
                <button
                    className={`text-2xl font-semibold ${activeTab === 'tuits' ? 'border-b-4 border-b-[#B25CD6]' : ''}`}
                    onClick={() => setActiveTab('tuits')}
                >
                    Tuits
                </button>
                <button
                    className={`text-2xl font-semibold ${activeTab === 'response' ? 'border-b-4 border-b-[#B25CD6]' : ''}`}
                    onClick={() => setActiveTab('response')}
                >
                    Response
                </button>
                <button
                    className={`text-2xl font-semibold ${activeTab === 'reposts' ? 'border-b-4 border-b-[#B25CD6]' : ''}`}
                    onClick={() => setActiveTab('reposts')}
                >
                    Reposts
                </button>
                <button
                    className={`text-2xl font-semibold ${activeTab === 'multimedia' ? 'border-b-4 border-b-[#B25CD6]' : ''}`}
                    onClick={() => setActiveTab('multimedia')}
                >
                    Multimedia
                </button>
            </header>
            <main>
                {activeTab === 'tuits' && <FeedTuits />}
                {activeTab === 'response' && <FeedResponse />}
                {activeTab === 'reposts' && <FeedReposts />}
                {activeTab === 'multimedia' && <FeedMultimedia />}
            </main>
        </div>
    );
};
