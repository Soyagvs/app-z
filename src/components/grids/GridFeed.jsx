import { FeedForyou } from "../feeds/FeedForyou"
import { FeedFriends } from "../feeds/FeedFriends"
import { useState } from "react"

export const GridFeed = () => {
    const [activeTab, setActiveTab] = useState('foryou');

    return (
        <div className="w-[570px] bg-white rounded-xl mt-4">
            <header className="border-b flex justify-center items-center gap-40 h-10">
                <button
                    className={`text-2xl font-semibold ${activeTab === 'foryou' ? 'border-b-4 border-b-[#B25CD6]' : ''}`}
                    onClick={() => setActiveTab('foryou')}
                >
                    Para ti
                </button>
                <button
                    className={`text-2xl font-semibold ${activeTab === 'friends' ? 'border-b-4 border-b-[#B25CD6]' : ''}`}
                    onClick={() => setActiveTab('friends')}
                >
                    Amigos
                </button>
            </header>
            <main>
                {activeTab === 'foryou' ? <FeedForyou /> : <FeedFriends />}
            </main>
        </div>
    )
}

