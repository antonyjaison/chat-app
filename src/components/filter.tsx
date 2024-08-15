import React, { useState } from 'react';

const Filter = () => {
    const methods = ["All", "Unread", "Archived", "Blocked"];
    const [active, setActive] = useState("All");

    return (
        <div className="w-full p-3 px-4 border-b border-gray-300 flex space-x-2">
            {methods.map((method) => (
                <button
                    key={method}
                    className={`px-2 py-1 rounded-full border text-sm ${active === method ? 'bg-red-500 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
                    onClick={() => setActive(method)}
                >
                    {method}
                </button>
            ))}
        </div>
    );
}

export default Filter;
