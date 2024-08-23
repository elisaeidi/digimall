// import CreateForm from "../components/form/page"



// // const postUser = async () => {

// //     // const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
// //     await fetch('http://localhost:3003/postUserInfo', {
// //         method: 'POST',
// //         headers: {
// //            'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //            'ID': 2,
// //            'Name': 'John',
// //            'lastName': 'Doe'
// //         })})
// //     // const data = response.json()
// //     // return data

// // }
// // console.log("userInfo is >>>>>>>>>>>>>>>", postUser)


// export default function Profile() {

//     // const userInfo = await postUser()
//     return (
//         <div>
//           <CreateForm inputList={[
//             { name: "first-name", type: "text", title: "نام" },
//             { name: "last_name", type: "text", title: "نام خانوادگی" },
//             { name: "mobile", type: "number", title: "موبایل" },
//             { name: "password", type: "password", title: "رمز عبور" }
//         ]} cols='2' /> 
//         </div>
//     )
// }
export default function Profile(){
    return (
        <div className="flex-1 flex flex-row justify-center items-center h-screen">
            <p className="text-orange-600">Profile Page Comming soon </p>
        </div>
    )
}