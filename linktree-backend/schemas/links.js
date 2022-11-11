export default {
    name: 'links',
    title: 'Links',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'redirect_url',
            title: 'Redirect URL',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'thumbnail',
        },
    },
}
