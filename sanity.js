import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'xi3ca9p5',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

const builder = imageUrlBuilder(client)
export const useFor = (source) => builder.image(source)

// Run this to add cors origin
// sanity cors add http://localhost:3000

export default client;