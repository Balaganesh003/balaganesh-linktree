export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'string',
        },
    ],
}
