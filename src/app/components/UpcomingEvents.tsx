import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const UpcomingEvents = () => {
    // Replace with actual image URLs
    const eventImage =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkRo55g2im2brqkZGDGcXpW98SN_c-hJiAA&s";

    return (
        <section className="bg-[#EEDDC5] py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-[#4A2511] text-5xl font-light mb-12 font-serif">
                    Upcoming Events
                </h2>

                {/* Grid Layout for Event Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm"
                        >
                            {/* Image Section */}
                            <div className="relative h-[200px] w-full">
                                <Image
                                    src={eventImage}
                                    alt="Event"
                                    fill
                                    className="object-cover"

                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 bg-[#F3E8D8]">
                                <h3 className="text-[#4A2511] text-lg font-semibold">
                                    Et viverra odio vulputate.
                                </h3>
                                <p className="text-[#4A2511] text-xs mt-1">
                                    Lorem ipsum dolor sit amet consectetur. Et viverra ut odio
                                    vulputate. Ligula velit dui dictum phasellus at. Quisque eros
                                    bibendum faucibus morbi velit.
                                </p>

                                {/* Date & Time */}
                                <div className="mt-4 flex items-center space-x-4">
                                    <div className="text-center">
                                        <span className="block text-5xl font-normal text-[#4A2511]">
                                            28
                                        </span>
                                        <span className="block text-xs uppercase text-[#4A2511]">
                                            September
                                        </span>
                                    </div>
                                    <div className="text-sm text-[#4A2511]">
                                        <div className="flex items-center space-x-2">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4" />
                                            <span>Conference Room, Berkley</span>
                                        </div>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <FontAwesomeIcon icon={faClock} className="h-4" />
                                            <span>8:00 AM - 12:00 PM</span>
                                        </div>
                                    </div>
                                </div>

                                {/* RSVP Button */}
                                <div className="mt-6">
                                    <button className="w-full py-2 border-2 border-[#4A2511] text-[#4A2511] font-bold rounded-md hover:bg-[#4A2511] hover:text-white transition">
                                        RSVP
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Events Button */}
                <div className="flex justify-center mt-10">
                    <button className="bg-transparent border-2 border-[#4A2511] text-[#4A2511] py-1 px-4 rounded-3xl font-medium  hover:bg-[#4A2511] hover:text-white transition">
                        SEE ALL EVENTS →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
