const eventSchema = {
    name: "event",
    title: "Event",
    type: 'document',
    fields: [
        {
            name: "day",
            title: "Day",
            type: "number",
        },
        {
            name: "weekDay",
            title: "Week Day",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
    ]
}
export default eventSchema;