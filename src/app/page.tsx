import { getEvents } from "../../sanity/schemas/sanity-utils";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import UpcomingEvents from "./components/UpcomingEvents";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <UpcomingEvents />
    </>
  )
}
