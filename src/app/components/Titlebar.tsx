import React from "react";
import { years } from "../../../utils/years";

export default function Titlebar({ name, showDate, fontName, textSize, fontWeight }: { name: string, showDate: boolean, fontName: string, textSize: string, fontWeight: string }) {
    return (

        <div>

            <div className="flex justify-between items-center mb-2">
                <h1 className={`text-${textSize} text-[#4A2511] font-${fontWeight} font-${fontName}`}>{name}</h1>
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