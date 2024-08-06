"use client";


export default function Input(props){
    console.log('props>>>>>>',props)
    return(
        <div>
            <label className="m-2" htmlFor="name">{props.title}</label>
            <input className="input"
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            // value={props.value}
            />
        </div>
    )
}