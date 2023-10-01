export default async (url:string)=>{
    return fetch(url).then(rez=>rez.json())
}