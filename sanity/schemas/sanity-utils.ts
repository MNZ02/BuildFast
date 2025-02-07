import { createClient, groq } from "next-sanity";


export async function getEvents() {
    const client = createClient({
        projectId: "vzis9cf1",
        dataset: "production",
        apiVersion: "2021-03-25",

    })


    try {
        const events = await client.fetch(groq`*[_type == "event"]`);
        return events;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }


}