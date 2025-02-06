import { EventCard } from "../components/EventCard";

export default function Gallery() {
    const years = [2024, 2023, 2022, 2021];

    const events = [
        {
            month: "December",
            events: [
                { day: 24, weekDay: "Thursday", title: "Event Name 1", description: "Short Description" },
                { day: 2, weekDay: "Thursday", title: "Event Name 2", description: "Short Description" },
            ],
        },
        {
            month: "November",
            events: [
                { day: 18, weekDay: "Thursday", title: "Event Name 3", description: "Short Description" },
                { day: 14, weekDay: "Thursday", title: "Event Name 4", description: "Short Description" },
            ],
        },
        {
            month: "December",
            events: [

                { day: 20, weekDay: "Thursday", title: "Event Name 5", description: "Short Description" },
                { day: 10, weekDay: "Thursday", title: "Event Name 6", description: "Short Description" },
            ],
        },
        {
            month: "December",
            events: [
                { day: 12, weekDay: "Thursday", title: "Event Name 7", description: "Short Description" },
                { day: 1, weekDay: "Thursday", title: "Event Name 8", description: "Short Description" },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-[#f4e8d6]">
            <main className="max-w-[1200px] mx-auto px-4 pt-24 pb-12">
                {/* Title & Year Selector */}
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl text-[#4A2511] font-bold">Gallery</h1>
                    <div className="flex gap-2">
                        {years.map((year) => (
                            <button
                                key={year}
                                className={`px-6 py-1.5 rounded-full text-sm border border-[#4A2511] transition ${year === 2024 ? "bg-[#4A2511] text-white" : "bg-transparent text-[#4A2511] hover:bg-[#4A2511]/10"
                                    }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
                <hr className="border-[#4A2511] my-4" />

                {/* Events List */}
                <div className="space-y-12">
                    {events.map((monthGroup, index) => (
                        <section key={index}>
                            <h2 className="text-xl text-[#4A2511] font-medium mb-6">{monthGroup.month}</h2>
                            <div className="space-y-4">
                                {monthGroup.events.map((event, eventIndex) => (
                                    <EventCard
                                        key={eventIndex}
                                        day={event.day}
                                        weekDay={event.weekDay}
                                        title={event.title}
                                        description={event.description}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}