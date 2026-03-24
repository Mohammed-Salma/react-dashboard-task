import { Monitor, Calendar, Play } from "lucide-react";

function Tabs({ counts, activeTab, setActiveTab }) {
    const tabs = [
        { name: "screens", label: "Screens", icon: Monitor },
        { name: "schedules", label: "Schedules", icon: Calendar },
        { name: "playlists", label: "Playlists", icon: Play },
    ];

    const activeTabData = tabs.find((tab) => tab.name === activeTab);
    const ActiveIcon = activeTabData ? activeTabData.icon : null;

    return (

        <div className="flex justify-between items-center bg-white border border-gray-200 shadow-sm p-3 rounded-2xl">
            <div className="flex gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-5 py-2 rounded-xl text-[15px] font-semibold transition-colors cursor-pointer ${activeTab === tab.name
                            ? "bg-red-50 text-[#ff5c5c]"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-semibold px-4">
                <ActiveIcon className="w-5 h-5" />
                <span className="text-[17px]">{counts[activeTab]}</span>
            </div>
        </div>
    )
}

export default Tabs