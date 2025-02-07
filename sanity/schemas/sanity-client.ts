import { createClient } from "next-sanity";

export const sanityClient = createClient({
    projectId: "vzis9cf1",
    dataset: "production",
    apiVersion: "2021-03-25",
})
