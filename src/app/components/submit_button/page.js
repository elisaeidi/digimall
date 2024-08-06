"use client"
import {useFormStatus} from "react-dom"
export default function Submit({...props}) {
    
    const {pending} = useFormStatus()
    return (
        <div dir="ltr">
            <button disabled={pending} className="border rounded-lg w-full bg-green-600 text-white m-4 p-2">{props.name}</button>
        </div>
    )
}