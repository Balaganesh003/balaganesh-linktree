import SanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-02-01',
    token: process.env.REACT_APP_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}
