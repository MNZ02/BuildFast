import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import eventSchema from "./sanity/schemas/event-schema";


export const config = defineConfig({
    projectId: "vzis9cf1",
    dataset: "production",
    title: "Buildfast",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [eventSchema] }
})