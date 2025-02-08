import Image from 'next/image';

const Newsletter = () => {
    return (
        <section className="relative py-20">
            {/* Background Image Container */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c2xldHRlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Newsletter Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80 p-10 rounded-lg"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white-off bg-opacity-90 rounded-3xl">
                <div className="text-center">
                    <h2 className="text-brown-primary text-4xl font-normal mb-2 text-white font-serif">Newsletter</h2>
                    <p className="text-brown-primary text-5xl font-normal mb-6 text-white font-serif">Stay Updated with ISS</p>
                    <p className="text-gray-text text-lg leading-relaxed mb-8 text-white font-sans font-semibold">
                        Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate.
                    </p>

                    {/* Input and Button Form */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full sm:w-80 px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-light focus:border-transparent text-gray-text placeholder-gray-text bg-[#F3E8D8]"  /* Adjusted width, padding, and added focus styles */
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-3 rounded-md bg-brown-primary text-white hover:bg-brown-light transition-colors duration-200" /* Adjusted padding */
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Newsletter;