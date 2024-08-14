
"use client"

import { postForm } from "../../../../actions/Address"
import Submit from "../submit_button/page"
import { useFormState } from "react-dom"

export default function CreateForm({ ...props }) {
    const list = props.inputList
    console.log("list>>>>>>>>>>",list)
    const [state, formAction] = useFormState(postForm, {})

    return (
        <form dir="rtl" action={formAction} className="flex-1 flex flex-row flex-wrap justify-center items-center grid grid-cols-3 gap-2 border border-violet-500 text-violet-500 rounded-lg p-6 m-8">
            {list.map((item, index) => {
                return <div key={index} className="flex-1 flex flex-col justify-center flex-wrap m-4">
                    <label className="pr-2 text-vilet-700">{item.title}</label>
                    <input type={item.type} name={item.name} className="border rounded-lg py-2 px-4 outline-none text-violet-500" />
                </div>
            })}
            <br />
            <div className="flex-1 flex flex-row justify-end items-end">
                <Submit name="ارسال" />
            </div>

        </form>
    )
}