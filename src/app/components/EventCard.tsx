import { Plus } from "lucide-react"

interface EventCardProps {
    day: number;
    weekDay: string;
    title: string;
    description: string;
}

export function EventCard({ day, weekDay, title, description }: EventCardProps) {
    return (
        <div className="flex items-center justify-between rounded-md border-2 border-[#4A2511] bg-[#f4e8d6] p-4 hover:bg-[#f4e8d6c0] transition-colors">
            <div className="flex gap-8">
                <div className="flex flex-col items-center justify-center min-w-[100px]">
                    <span className="text-5xl font-medium text-[#4A2511]">{day}</span>
                    <span className="text-sm text-[#4A2511]">{weekDay}</span>
                </div>
                <div className="flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-[#4A2511]">{title} :</h3>
                    <p className="text-xl font-semibold text-[#4A2511] ml-2"> {description}</p>
                </div>
            </div>
            <button className="ml-4 rounded-full p-2 hover:bg-[#4A2511]/10">
                <Plus className="h-6 w-6 text-[#4A2511] border border-black rounded-full p-1" />
            </button>
        </div>
    );
}
