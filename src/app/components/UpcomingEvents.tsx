import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you'll use Font Awesome for icons
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'; // Import calendar and clock icons

const UpcomingEvents = () => {
    return (
        <section className="bg-beige-light py-20"> {/* Increased py-20 for more vertical padding */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Responsive container */}
                <h2 className="text-brown-primary text-3xl font-normal mb-14 text-center"> {/* Title styling and increased margin-bottom */}
                    Upcoming Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-10"> {/* Adjusted grid and gaps */}
                    {/* Event Card 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden"> {/* Rounded corners and shadow */}
                        <div className="relative h-[220px] w-full"> {/* Image container height */}
                            <Image
                                src="/images/event-image1.jpg" // Replace with your event image 1
                                alt="Event Image 1"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col space-y-4"> {/* Card content padding and vertical spacing */}
                            <p className="text-gray-text text-lg italic leading-relaxed text-center"> {/* Quote text styling */}
                                Et viverra odio vulputate.
                            </p>
                            <div className="flex items-center space-x-2 justify-center text-gray-text text-sm"> {/* Date section */}
                                <FontAwesomeIcon icon={faCalendar} className="h-4 w-4" />
                                <span>Sept</span>
                                <span className="font-semibold">28</span>
                            </div>
                            <div className="flex items-center space-x-2 justify-center text-gray-text text-sm"> {/* Time section */}
                                <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                                <span>8:00 AM - 12:00 PM</span>
                            </div>
                            <p className="text-gray-text text-sm text-center"> {/* Location section */}
                                Conference Room, Berkley
                            </p>
                            <button className="bg-white border border-brown-primary text-brown-primary py-2 px-6 rounded-md mt-2 self-center hover:bg-brown-light hover:text-white transition-colors duration-200"> {/* RSVP button styling */}
                                RSVP
                            </button>
                        </div>
                    </div>
                    {/* Event Card 2 - Repeat and update image/text */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="relative h-[220px] w-full">
                            <Image
                                src="/images/event-image2.jpg" // Replace with your event image 2
                                alt="Event Image 2"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col space-y-4">
                            <p className="text-gray-text text-lg italic leading-relaxed text-center">
                                Et viverra odio vulputate.
                            </p>
                            <div className="flex items-center space-x-2 justify-center text-gray-text text-sm">
                                <FontAwesomeIcon icon={faCalendar} className="h-4 w-4" />
                                <span>Sept</span>
                                <span className="font-semibold">28</span>
                            </div>
                            <div className="flex items-center space-x-2 justify-center text-gray-text text-sm">
                                <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                                <span>8:00 AM - 12:00 PM</span>
                            </div>
                            <p className="text-gray-text text-sm text-center">
                                Conference Room, Berkley
                            </p>
                            <button className="bg-white border border-brown-primary text-brown-primary py-2 px-6 rounded-md mt-2 self-center hover:bg-brown-light hover:text-white transition-colors duration-200">
                                RSVP
                            </button>
                        </div>
                    </div>
                    {/* Event Card 3 - Repeat and update image/text */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="relative h-[220px] w-full">
                            <Image
                                src="/images/event-image3.jpg" // Replace with your event image 3
                                alt="Event Image 3"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col space-y-4">
                            <p className="text-gray-text text-lg italic leading-relaxed text-center">
                                Et viverra odio vulputate.
                            </p>
                            <div className="flex items-center space-x-2 justify-center text-gray-text text-sm">
                                <FontAwesomeIcon icon={faCalendar} className="h-4 w-4" />
                                <span>Sept</span>
                                <span className="font-semibold">28</span>
                            </div>
                            <div className="flex items-center space-x-2 justify-center text-gray-text text-sm">
                                <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                                <span>8:00 AM - 12:00 PM</span>
                            </div>
                            <p className="text-gray-text text-sm text-center">
                                Conference Room, Berkley
                            </p>
                            <button className="bg-white border border-brown-primary text-brown-primary py-2 px-6 rounded-md mt-2 self-center hover:bg-brown-light hover:text-white transition-colors duration-200">
                                RSVP
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-10"> {/* Container for "See All Events" button and center alignment */}
                    <button className="bg-beige-light text-brown-primary py-3 px-8 rounded-md border border-brown-primary hover:bg-brown-primary hover:text-beige-light transition-colors duration-200">
                        SEE ALL EVENTS <span className="ml-2">→</span> {/* Right arrow */}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;