export default async (url:string)=>{
    return fetch(url, {
        method: 'DELETE',
    })
}