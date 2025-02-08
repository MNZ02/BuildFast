import React from "react";
import { getEvents } from "../../../sanity/schemas/sanity-utils";
import { EventCard } from "../components/EventCard";
import Titlebar from "../components/Titlebar";

async function pastEvents() {
    const events = await getEvents();
    return (
        <div className="min-h-screen bg-[#f4e8d6] pt-12">
            <main className="max-w-[1200px] mx-auto px-4 pt-24 pb-12">
                {/* Title & Year Selector */}
                <Titlebar name="Past Events" showDate={true} />

                {/* Events List */}
                <div className="space-y-12">
                    {Array.isArray(events) && events.length > 0 ? (
                        events.map((monthGroup, index) => (
                            <section key={index}>
                                <h2 className="text-xl text-[#4A2511] font-medium mb-6">
                                    {monthGroup.month}
                                </h2>
                                <div className="space-y-4">
                                    {events.map((event: any, eventIndex: any) => (
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
                        ))
                    ) : (
                        <p className="text-center text-[#4A2511] text-lg">No events available.</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default pastEvents;
