
import CreateForm from "../components/form/page";
import Modal from "../components/modal/page";

// const getFormData = async () => {
//     const respons = await fetch('http://localhost:3002/posts')
//     const data = respons.json()
//     return data
// }
// const postFormData = async (email,password) => {
//     const newUser = { email: email, password: password };

//     fetch('http://localhost:3002/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newUser),
//     })
//         .then(response => response.json())
//         .then(user => console.log('user', user));
// }

export default async function Login() {
    return <div className="flex basis-3/4 justify-center items-center min-h-screen">
        <CreateForm inputList={[
            { name: "firstName", type: "text", title: "نام" },
            { name: "lastName", type: "text", title: "نام خانوادگی" },
            { name: "mobile", type: "number", title: "موبایل" },
            { name: "password", type: "password", title: "رمز عبور" }
        ]} cols='2' />
        {/* <Modal /> */}
    </div>
}