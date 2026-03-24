import { useState } from "react";
import { ChevronDown } from "lucide-react";

function StatusDropdown({ status }) {
    const [currentStatus, setCurrentStatus] = useState(status);

    return (
        <div className="relative group">
            <select
                value={currentStatus}
                onChange={(e) => setCurrentStatus(e.target.value)}
                className={`appearance-none outline-none cursor-pointer pl-4 pr-10 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 border-2 shadow-sm focus:ring-2 focus:ring-offset-2
                ${currentStatus === "live"
                        ? "bg-[#e5f8f0] text-[#1caf68] border-transparent hover:border-[#1caf68]/30 focus:ring-[#1caf68]/50 hover:shadow-md"
                        : "bg-gray-50 text-gray-500 border-transparent hover:border-gray-200 hover:text-gray-700 hover:shadow-md focus:ring-gray-300"
                    }`}
            >
                <option value="live">LIVE</option>
                <option value="offline">OFFLINE</option>
            </select>
            <ChevronDown
                size={14}
                strokeWidth={3}
                className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:translate-y-[calc(-50%+2px)]
                ${currentStatus === "live" ? "text-[#1caf68]" : "text-gray-400"}
                `}
            />
            {currentStatus === "live" && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#1caf68] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1caf68] shadow-sm border-2 border-white"></span>
                </span>
            )}
        </div>
    );
}

export default StatusDropdown;