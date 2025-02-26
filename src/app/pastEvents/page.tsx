import React from "react";
import { getEvents } from "../../../sanity/schemas/sanity-utils";
import { EventCard } from "../components/EventCard";
import { truncate } from "../../../utils/truncate";
import Titlebar from "../components/Titlebar";


interface Event {
    _id: string;
    day: number;
    weekDay: string;
    title: string;
    description: string;
    month: string;
}


interface MonthGroup {
    month: string;
    events: Event[];
}

async function pastEvents() {

    const flatEvents: Event[] = await getEvents();


    const groupedEvents = flatEvents.reduce<Record<string, MonthGroup>>(
        (acc, event) => {
            if (!acc[event.month]) {
                acc[event.month] = { month: event.month, events: [] };
            }
            acc[event.month].events.push(event);
            return acc;
        },
        {}
    );


    const monthGroups: MonthGroup[] = Object.values(groupedEvents);

    return (
        <div className="min-h-screen bg-[#f4e8d6] pt-12">
            <main className="max-w-[1200px] mx-auto px-4 pt-24 pb-12">
                {/* Title & Year Selector */}
                <Titlebar name="Past events" showDate={true} fontName="serif" textSize="5xl" fontWeight="normal" />

                {/* Events List */}
                <div className="space-y-12">
                    {monthGroups.length > 0 ? (
                        monthGroups.map((monthGroup, index) => (
                            <section key={index}>
                                <h2 className="text-xl text-[#4A2511] font-medium mb-6">
                                    {monthGroup.month}
                                </h2>
                                <div className="space-y-4">
                                    {monthGroup.events.length > 0 ? (
                                        monthGroup.events.map((event) => (
                                            <EventCard
                                                key={event._id}
                                                day={event.day}
                                                weekDay={event.weekDay}
                                                title={event.title}
                                                description={truncate(event.description, 22)}
                                            />
                                        ))
                                    ) : (
                                        <p className="text-center text-[#4A2511] text-lg">
                                            No events available.
                                        </p>
                                    )}
                                </div>
                            </section>
                        ))
                    ) : (
                        <p className="text-center text-[#4A2511] text-lg">
                            No events available.
                        </p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default pastEvents;
