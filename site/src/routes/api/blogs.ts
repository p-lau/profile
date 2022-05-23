import { sanityClient } from '$lib/sanity'
import type { RequestHandler } from '@sveltejs/kit'
export const get: RequestHandler = async () => {
    const query = `*[_type == "post" && "Blog" in categories[]->title]{
        "categories": categories[]->title,
        "slug": slug.current,
        "image": mainImage.asset->url,
        title,
        summary,
    }`
    return sanityClient.fetch(query)
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