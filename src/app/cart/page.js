const getphotosId = async (id) => {
    const response = await fetch(`http://localhost:3003/getProduct/${id}`)

    return response.json()

}
console.log('getphotosId',getphotosId)

export default async function Cart(params){
const cart = getphotosId(params.id)
    console.log("cart is >> ",params.id)
    return(
        // <h1>{params}</h1>
        <h1>cart page</h1>
        
    )
}