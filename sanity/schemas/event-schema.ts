import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        // Keep the date field if you want the full datetime.
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
            description: 'Full date and time for the event',
        }),
        // Additional fields for easier grouping/filtering.
        defineField({
            name: 'day',
            title: 'Day',
            type: 'number',
            description: 'Day of the month',
            validation: (Rule) => Rule.required().min(1).max(31),
        }),
        defineField({
            name: 'month',
            title: 'Month',
            type: 'string',
            description: 'Month of the event',
            options: {
                list: [
                    { title: 'January', value: 'January' },
                    { title: 'February', value: 'February' },
                    { title: 'March', value: 'March' },
                    { title: 'April', value: 'April' },
                    { title: 'May', value: 'May' },
                    { title: 'June', value: 'June' },
                    { title: 'July', value: 'July' },
                    { title: 'August', value: 'August' },
                    { title: 'September', value: 'September' },
                    { title: 'October', value: 'October' },
                    { title: 'November', value: 'November' },
                    { title: 'December', value: 'December' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'weekDay',
            title: 'Week Day',
            type: 'string',
            description: 'Day of the week (e.g. Monday)',
            options: {
                list: [
                    { title: 'Sunday', value: 'Sunday' },
                    { title: 'Monday', value: 'Monday' },
                    { title: 'Tuesday', value: 'Tuesday' },
                    { title: 'Wednesday', value: 'Wednesday' },
                    { title: 'Thursday', value: 'Thursday' },
                    { title: 'Friday', value: 'Friday' },
                    { title: 'Saturday', value: 'Saturday' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'time',
            title: 'Time',
            type: 'string',
            description: 'Time range, e.g. "8:00 AM - 12:00 PM"',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
});
