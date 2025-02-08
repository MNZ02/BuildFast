import { getEvents } from "../../sanity/schemas/sanity-utils";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import UpcomingEvents from "./components/UpcomingEvents";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";

export default async function Home() {
  const events = await getEvents();


  return (
    <>
      <Hero />
      <AboutUs />
      <UpcomingEvents events={events} />
      <Gallery />
      <Newsletter />

    </>
  )
}


