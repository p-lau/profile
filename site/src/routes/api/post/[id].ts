import { sanityClient } from '$lib/sanity'
import type { RequestHandler } from '@sveltejs/kit'
export const get: RequestHandler = async ({params: {id}}) => {
    const query = `*[_type=="post" && slug.current == $id][0]{title, publishedAt, summary, "categories": categories[]->title, author->{name, "slug": slug.current, "avatar": image.asset->url}, body}`
    const params = {
        id
    }
    return sanityClient.fetch(query, params)
    .then(data => {
        if (data) {
            return {
                status: 200,
                body: data
            }
        } else return {
            status: 404,
            body: {
                error: "Not found"
            }
        }
    })
    .catch(() => {
        return {
            status: 500,
            body: {
                error: "Internal Server Error"
            }
        }
    })
}