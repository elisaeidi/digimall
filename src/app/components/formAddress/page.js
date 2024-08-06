"use client"

import { useState } from "react"

export default function FormAddress({ state, city }) {
    
    const [cityList, setCityList] = useState([])

    const handleCity = (e) => {
        const useCity = city.map(item => item.filter(cityItem => cityItem.stateId === e.target.value))
        setCityList(useCity)
    }

    return (
        <from dir="rtl" className="flex-1 flex flex-col border border-violet-500 rounded-lg mx-4 p-4">

            <div className="flex-1 flex flex-col justify-center grid grid-cols-2 items-center ">
                <div className="flex flex-col my-2">
                    <label className="mr-2 text-violet-700 text-base">عنوان</label>
                    <input name="title" className="border rounded-lg w-6/12 py-2 px-4 outline-none text-violet-500" />
                </div>
                <div className="flex flex-col my-2">
                    <label className="mr-2 text-violet-700 text-base">استان</label>
                    <select className="border rounded-lg py-2 w-6/12 outline-none hover:shadow-lg"
                        onChange={handleCity}
                    >
                        {
                            state.map(item => item.map(stateItem => { return <option key={stateItem.id} value={stateItem.id}>{stateItem.name}</option> }))
                        }
                    </select>
                </div>
                <div className="flex flex-col my-2">
                    <label className="mr-2 text-violet-700 text-base">شهر</label>
                    <select className="border rounded-lg py-2 w-6/12 outline-none hover:shadow-lg">
                        {
                            cityList.map(item => item.map(item => <option key={item.id} value={item.id}>{item.name}</option>))
                        }
                    </select>
                </div>
                <div className="flex flex-col my-2">
                    <label className="mr-2 text-violet-700 text-base">آدرس</label>
                    <textarea className="border rounded-lg py-2 px-4 outline-none text-violet-500" />
                </div>
            </div>
            <div dir="ltr" className="flex-1 flex flex-row justify-start mt-4">
                <button className="border bg-green-500 px-4 py-2 m-4 text-white rounded-lg hover:shadow-lg">send</button>
            </div>

        </from>
    )
}