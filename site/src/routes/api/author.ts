import { sanityClient } from '$lib/sanity'
import type { RequestHandler } from '@sveltejs/kit'
export const get: RequestHandler = async () => {
    const query = `*[_type == "author"][0]{bio, "avatar": image.asset ->, name}`
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