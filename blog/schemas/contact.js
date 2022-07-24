export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                accept: 'image/svg'
            },
        },
        {
            title: 'Link',
            name: 'href',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
}
