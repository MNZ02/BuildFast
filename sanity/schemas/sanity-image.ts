import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const client = createClient({
    projectId: "vzis9cf1",
    dataset: "production",
    apiVersion: "2021-03-25",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
