"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { urlFor } from "../../../sanity/schemas/sanity-image";


interface SanityImage {
    _type: "image";
    asset: {
        _ref: string;
        _type: string;
    };
}

interface Event {
    _id: string;
    title: string;
    description: string;
    date?: string;
    image?: SanityImage | string;
    location?: string;
    time?: string;
    day?: number;
    weekDay?: string;
    month?: string;
}

interface UpcomingEventsProps {
    events: Event[];
}

const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
    const router = useRouter();

    function truncate(text: string, maxLength: number): string {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    }

    return (
        <section className="bg-[#EEDDC5] py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-[#4A2511] text-5xl font-light mb-12 font-serif">
                    Upcoming Events
                </h2>

                {events.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                        {events.map((event, index) => {
                            // Fallback image URL in case event.image is not valid.
                            const fallbackImage =
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkRo55g2im2brqkZGDGcXpW98SN_c-hJiAA&s";

                            // If event.image is an object, use urlFor to generate the URL.
                            const imageUrl =
                                event.image && typeof event.image === "object"
                                    ? urlFor(event.image).width(400).url()
                                    : typeof event.image === "string" && event.image.trim() !== ""
                                        ? event.image
                                        : fallbackImage;

                            // Compute date values.
                            const eventDate = event.date ? new Date(event.date) : new Date();
                            const day = event.date ? eventDate.getDate() : "28";
                            const month = event.date
                                ? eventDate.toLocaleString("default", { month: "long" })
                                : "September";

                            return (
                                <div
                                    key={index}
                                    className="bg-[#F3E8D8] border border-gray-300 rounded-lg overflow-hidden shadow-sm"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-[200px] w-full">
                                        <Image
                                            src={imageUrl}
                                            alt={event.title || "Event"}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 bg-[#F3E8D8]">
                                        <h3 className="text-[#4A2511] text-lg font-semibold">
                                            {event.title || "Et viverra odio vulputate."}
                                        </h3>
                                        <p className="text-[#4A2511] text-xs mt-1">
                                            {truncate(event.description || "", 100)}
                                        </p>

                                        {/* Date, Time & Location */}
                                        <div className="mt-4 flex items-center justify-between">
                                            <div className="text-center">
                                                <span className="block text-5xl font-normal text-[#4A2511]">
                                                    {day}
                                                </span>
                                                <span className="block text-xs uppercase text-[#4A2511]">
                                                    {month}
                                                </span>
                                            </div>
                                            <div className="text-sm text-[#4A2511]">
                                                <div className="flex items-center space-x-2">
                                                    <FontAwesomeIcon
                                                        icon={faMapMarkerAlt}
                                                        className="h-4"
                                                    />
                                                    <span>
                                                        {event.location || "Conference Room, Berkley"}
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    <FontAwesomeIcon icon={faClock} className="h-4" />
                                                    <span>{event.time || "8:00 AM - 12:00 PM"}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* RSVP Button */}
                                        <div className="mt-6">
                                            <button
                                                className="w-full py-2 border-2 border-[#4A2511] text-[#4A2511] font-bold rounded-md hover:bg-[#4A2511] hover:text-white transition"
                                                onClick={() => router.push("/events")}
                                            >
                                                RSVP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-center text-[#4A2511] text-lg">
                        No events available.
                    </p>
                )}

                {/* See All Events Button */}
                <div className="flex justify-center mt-5">
                    <button
                        className="bg-transparent border-2 border-[#4A2511] text-[#4A2511] py-1 px-4 rounded-3xl font-medium hover:bg-[#4A2511] hover:text-white transition text-sm"
                        onClick={() => router.push("/events")}
                    >
                        SEE ALL EVENTS →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
