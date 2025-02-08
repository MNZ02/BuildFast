import React from "react";
import { years } from "../gallery/page";


export default function Titlebar({ name, showDate }: { name: string, showDate: boolean }) {
    return (

        <div>

            <div className="flex justify-between items-center mb-2">
                <h1 className="text-5xl text-[#4A2511] font-normal font-serif">{name}</h1>
                <div className="flex gap-2">
                    {
                        showDate ? (

                            years.map((year) => (
                                <button
                                    key={year}
                                    className={`px-6 py-1.5 rounded-full text-sm border border-[#4A2511] transition ${year === 2024 ? "bg-[#4A2511] text-white" : "bg-transparent text-[#4A2511] hover:bg-[#4A2511]/10"
                                        }`}
                                >
                                    {year}
                                </button>
                            )
                            )
                        ) : null
                    }
                </div>
            </div>
            <hr className="border-[#4A2511] my-4" />
        </div>
    )
}