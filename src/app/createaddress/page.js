
const getAddress = async () => {

    // const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    const response = await fetch('http://localhost:3003/createAddress')
    const data = response.json()
    return data

}

import FormAddress from "../components/formAddress/page";

export default async function createAddress() {

    const address = await getAddress()
    const state = address.map(item => item.state.map(item => item))
    const city = address.map(item => item.cities.map(item => item))
    
    return (
        <div className="flex basis-3/4 justify-center items-center min-h-screen">
            <FormAddress state={state} city={city} />
        </div>
    )
}