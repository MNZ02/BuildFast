import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="bg-white-off py-20"> {/* Increased py-20 for more spacing */}
            <div className="container mx-auto px-5">
                <h2 className="text-gray-title text-3xl font-normal mb-12 text-center">About Us</h2> {/* Centered and styled title */}
                <div className="flex gap-12 items-start mt-5"> {/* Increased gap-12 for more spacing */}
                    <div className="flex-1.5">
                        <div className="mb-7"> {/* Increased mb-7 for icon spacing */}
                            <Image src="/images/globe-icon.png" alt="Globe Icon" width={60} height={60} /> {/* Slightly larger icon */}
                        </div>
                        <p className="text-gray-text text-lg leading-relaxed"> {/* Adjusted text style */}
                            Eviverra ul sdie vulputate. Liyeu velit cu dicum phasellus et varbi... {/* Text Content from prompt */}
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-3"> {/* Reduced gap-3 for image spacing */}
                        <Image src="/images/about-us-image1.jpg" alt="About Us Image 1" width={300} height={220} className="rounded-md" /> {/* Slightly wider images */}
                        <Image src="/images/about-us-image2.jpg" alt="About Us Image 2" width={300} height={220} className="rounded-md" />
                        <Image src="/images/about-us-image3.jpg" alt="About Us Image 3" width={300} height={220} className="rounded-md" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;