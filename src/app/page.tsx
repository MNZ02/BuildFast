import { getEvents } from "../../sanity/schemas/sanity-utils";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import UpcomingEvents from "./components/UpcomingEvents";


export default async function Home() {
  const events = await getEvents();

  console.log({ events })

  return (
    <>
      <Hero />
      <AboutUs />
      <UpcomingEvents events={events} />
    </>
  )
}


