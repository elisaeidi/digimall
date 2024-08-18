

const getproducts = async () => {

  // const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  const response = await fetch('http://localhost:3003/getProduct')
  const data = response.json()
  return data

}


import CardComponent from "../components/cardComponents/page";

export default async function Products() {
  
  const product = await getproducts()
  return (
    <div>
      <CardComponent product={product} />
    </div>
  )
}