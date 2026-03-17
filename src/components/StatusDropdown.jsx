import { useState } from "react";

function StatusDropdown({ status }) {
    const [currentStatus, setCurrentStatus] = useState(status);

    return (
        <select
            value={currentStatus}
            onChange={(e) => setCurrentStatus(e.target.value)}
            className={`appearance-none text-center outline-none cursor-pointer px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider
            ${currentStatus === "live"
                ? "bg-[#e5f8f0] text-[#1caf68]"
                : "bg-gray-100 text-gray-500"
            }`}
        >
            <option value="live">LIVE</option>
            <option value="offline">OFFLINE</option>

        </select>
    );
}

export default StatusDropdown;