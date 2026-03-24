import { useState } from "react";
import Tabs from "../components/Tabs";
import ScreenCard from "../components/ScreenCard";

import screens from "../data/screens.json";
import schedules from "../data/schedules.json";
import playlists from "../data/playlists.json";

function Dashboard() {
    const [activeTab, setActiveTab] = useState("screens");
    const data = {
        screens,
        schedules,
        playlists
    };

    const counts = {
        screens: screens.length,
        schedules: schedules.length,
        playlists: playlists.length
    };

    return (
        <div className="p-8 bg-[#f8f9fa] min-h-screen text-gray-800">
            <div className="w-full flex flex-col gap-6">
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    counts={counts}
                />
                <div className="flex flex-col gap-4">
                    {data[activeTab].map((item) => (
                        <ScreenCard key={item.id} item={item} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Dashboard