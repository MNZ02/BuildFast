import Image from "next/image";
import Link from "next/link";
import { getEvents } from "../../../sanity/schemas/sanity-utils";
import { Key } from "react";
import { urlFor } from "../../../sanity/schemas/sanity-image";


interface SanityImage {
    _type: "image";
    asset: {
        _ref: string;
        _type: string;
    };
}


const Gallery = async () => {
    const events = await getEvents();

    const galleryEvents = events.slice(0, 6);

    const fallbackImage =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkRo55g2im2brqkZGDGcXpW98SN_c-hJiAA&s";

    return (
        <section className="bg-[#F4E8D6] py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <h2 className="text-[#4A2511] text-5xl font-light mb-12 font-serif">
                    Gallery
                </h2>

                {/* Image Grid */}
                {galleryEvents.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {galleryEvents.map(
                            (
                                event: { image?: SanityImage | string; _id: Key | null | undefined },
                                index: number
                            ) => {

                                const src = event.image
                                    ? urlFor(event.image).width(400).url()
                                    : fallbackImage;

                                return (
                                    <div key={event._id} className="rounded-lg overflow-hidden">
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px]"
                                        />
                                    </div>
                                );
                            }
                        )}
                    </div>
                ) : (
                    <p className="text-center text-[#4A2511] text-lg">
                        No images available.
                    </p>
                )}

                {/* View All Button */}
                <div className="flex justify-center mt-5">
                    <Link href="/gallery">
                        <button className="bg-transparent border-2 border-[#4A2511] text-[#4A2511] py-1 px-4 rounded-3xl font-medium hover:bg-[#4A2511] hover:text-white transition text-sm">
                            VIEW ALL →
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
