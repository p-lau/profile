export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: { type: 'post' },
        },
        {
            name: 'external',
            title: 'External Link',
            type: 'url',
        },
    ],

    preview: {
        select: {
            title: 'post.title',
            author: 'post.author.name',
            media: 'post.mainImage',
        },
        prepare(selection) {
            const { title, author } = selection
            return Object.assign({}, selection, {
                title: title && `${title}`,
                subtitle: author && `by ${author}`,
            })
        },
    },
}
