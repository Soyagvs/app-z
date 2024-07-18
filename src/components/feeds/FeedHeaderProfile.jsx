import { useState } from "react";
import { FeedPosts } from "./FeedPosts";
import { FeedResponse } from "./FeedResponse";
import { FeedReposts } from "./FeedReposts";
import { FeedMultimedia } from "./FeedMultimedia";

export const FeedHeaderProfile = () => {
    const [activeTab, setActiveTab] = useState('posts');

    return (
        <div className="w-[570px] h-screen bg-white rounded-xl">
            <header className="border-b flex justify-center items-center gap-10 h-10">
                <button
                    className={`text-2xl font-semibold ${activeTab === 'posts' ? 'border-b-4 border-b-[#B25CD6]' : ''}`}
                    onClick={() => setActiveTab('posts')}
                >
                    Posts
                </button>
                <button
                    className={`text-2xl font-semibold ${activeTab === 'response' ? 'border-b-4 border-b-[#B25CD6]' : ''}`}
                    onClick={() => setActiveTab('response')}
                >
                    Respuestas
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
                {activeTab === 'posts' && <FeedPosts />}
                {activeTab === 'response' && <FeedResponse />}
                {activeTab === 'reposts' && <FeedReposts />}
                {activeTab === 'multimedia' && <FeedMultimedia />}
            </main>
        </div>
    );
};
