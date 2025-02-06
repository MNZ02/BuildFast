import { Plus } from "lucide-react"

interface EventCardProps {
    day: number
    weekDay: string
    title: string
    description: string
}

export function EventCard({ day, weekDay, title, description }: EventCardProps) {
    return (
        <div className="flex items-center justify-between rounded-lg border border-[#4A2511] bg-[#f4e8d6] p-6 hover:bg-[#f4e8d6c0] transition-colors">
            <div className="flex gap-8">
                <div className="flex flex-col items-center justify-center min-w-[100px]">
                    <span className="text-5xl font-bold text-[#4A2511]">{day}</span>
                    <span className="text-sm text-[#4A2511]/70 mt-1">{weekDay}</span>
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-lg text-[#4A2511]">{title}</h3>
                    <p className="text-sm text-[#4A2511]/70 mt-1">{description}</p>
                </div>
            </div>
            <button className="ml-4 rounded-full p-2 hover:bg-[#4A2511]/10">
                <Plus className="h-6 w-6 text-[#4A2511] border border-black rounded-full p-1" />
            </button>
        </div>
    )
}

