import Image from 'next/image';

const UpcomingEvents = () => {
    return (
        <section className="bg-beige-light py-10">
            <div className="container mx-auto px-5">
                <h2 className="text-2xl font-semibold mb-5">Upcoming Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {/* Repeat this event card for each event */}
                    <div className="bg-white rounded-md overflow-hidden shadow-sm">
                        <div className="h-[200px] relative">
                            <Image src="/images/event-image1.jpg" alt="Event Image 1" layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-5 text-center">
                            <p className="text-4xl font-bold text-yellow-primary mb-2">28</p>
                            <p className="text-gray-dark">Event Description 1...</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md overflow-hidden shadow-sm">
                        <div className="h-[200px] relative">
                            <Image src="/images/event-image2.jpg" alt="Event Image 2" layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-5 text-center">
                            <p className="text-4xl font-bold text-yellow-primary mb-2">28</p>
                            <p className="text-gray-dark">Event Description 2...</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md overflow-hidden shadow-sm">
                        <div className="h-[200px] relative">
                            <Image src="/images/event-image3.jpg" alt="Event Image 3" layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-5 text-center">
                            <p className="text-4xl font-bold text-yellow-primary mb-2">28</p>
                            <p className="text-gray-dark">Event Description 3...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;