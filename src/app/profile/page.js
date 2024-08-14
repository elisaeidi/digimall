
import CreateForm from "../components/form/page";
import Modal from "../components/modal/page";
  
// const postUserInfo = async () => {
//     await fetch('http://localhost:3003/postUserInfo', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             id: 0,
//             first_name: "Elahe",
//             last_name: "Saeedi",
//             mobile: "09036047690",
//             password:"000000"
//         })
//     })

// }
// console.log("post>>>>>>>",postUserInfo())

export default  function Login() {
    
    // const userInfo = await postUserInfo()
    // console.log("result",userInfo)


    // return <div className="flex basis-3/4 justify-center items-center min-h-screen">
    //     {/* <CreateForm inputList={[
    //         { name: first_name, type: "text", title: "نام" },
    //         { name: last_name, type: "text", title: "نام خانوادگی" },
    //         { name: mobile, type: "number", title: "موبایل" },
    //         { name: password, type: "password", title: "رمز عبور" }
    //     ]} cols='2' /> */}
    // </div>

   return( <div className="flex-1 flex flex-row justify-center items-center text-rose-400 text-2xl">
            <h1>Profile is comming soon ...</h1>
        </div>)
}