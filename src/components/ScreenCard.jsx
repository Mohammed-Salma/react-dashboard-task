import { Video, Link, Maximize, ListVideo } from "lucide-react";

import StatusDropdown from "./StatusDropdown";

function getIcon(playingType, nowPlaying) {
    if (nowPlaying.includes("Splash")) return <Maximize size={18} />;
    if (nowPlaying.includes("Employee")) return <ListVideo size={18} />;
    if (playingType === "video") return <Video size={18} />;
    return <Link size={18} />;
}


function ScreenCard({ item }) {
    return (
        <div className="bg-white rounded-[1.5rem] p-5 flex justify-between items-center border border-gray-200 shadow-sm">
            <div className="flex-[1.5]">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <div className="flex gap-2 mt-3 flex-wrap items-center">
                    {item.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-500 text-[13px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                        >
                            {tag} 
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex-[1.5] flex gap-5 items-center">
                <div className="w-[120px] shrink-0 h-[68px] rounded-lg border-[1.5px] border-slate-900 overflow-hidden shadow-sm">
                    <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <div className="text-[11px] font-bold text-gray-400 mb-1 tracking-widest uppercase">
                        Now Playing
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
                        {getIcon(item.playingType, item.nowPlaying)}
                        <span>{item.nowPlaying}</span>
                    </div>
                </div>
            </div>
            <div className="flex-[0.3] flex justify-end">
                <StatusDropdown status={item.status} />
            </div>
        </div>
    )
}

export default ScreenCard