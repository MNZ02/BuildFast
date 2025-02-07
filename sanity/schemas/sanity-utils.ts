import { createClient, groq } from "next-sanity";


export async function getEvents() {
    const client = createClient({
        projectId: "vzis9cf1",
        dataset: "production",
        apiVersion: "2021-03-25",

    })


    client.fetch(
        groq`*[_type == "event"]`
    ).then((events) => {
        console.log(events)
    })


}