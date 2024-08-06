const getPosts = async()=>{
    const response = await fetch('http://localhost:3003/posts')
    const data = await response.json()
    return data
}

export default  async function CreateProduct({...props}){
    const posts = await getPosts()
    
    return(
        <div>
            <label className="m-4">Hi {posts[1].email}</label>
            <br />
            <label>wellcome to your page</label>
        </div>
    )
}