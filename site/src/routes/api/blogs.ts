import type { RequestHandler } from '@sveltejs/kit'
export const get: RequestHandler = async () => {
    const query = `*[_type=="post"]{title,"slug":slug.current,publishedAt,"image":mainImage.asset->url,"categories":categories[]->title,summary}`
    const posts = await fetch(`https://92s64fma.api.sanity.io/v2022-05-01/data/query/production?query=${query}`)
    try {
        const data = await posts.json()
        if(data?.result?.length){
            return {
                status: 200,
                body: data.result
            }
        }
        else return {
            status: 404,
            body: "No posts found"
        }
    } catch {
        return {
            status: 500,
            body: {
                error: 'Something went wrong'
            }
        }
    }
}