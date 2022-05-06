import type { RequestHandler } from '@sveltejs/kit'
export const get: RequestHandler = async ({params: {id}}) => {
    const query = `*%5B_type%3D%3D%22post%22%26%26slug.current%3D%3D%22${id}%22%5D%7B%22slug%22%3Aslug.current%2Ctitle%2Csummary%2C%22author%22%3Aauthor-%3E%7Bname%2C%22slug%22%3Aslug.current%7D%2Cbody%2C%22image%22%3AmainImage.asset-%3Eurl%2CpublishedAt%2C%22categories%22%3Acategories%5B%5D-%3Etitle%7D[0]`
    const posts = await fetch(`https://92s64fma.api.sanity.io/v1/data/query/production?query=${query}`)
    try {
        const data = await posts.json()
        if(data?.result){
            return {
                status: 200,
                body: data.result
            }
        }
        else return {
            status: 404,
            body: "Post not found"
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