"use server"

const postForm = async (state,formData) => {
    const title = formData.get("title")
    const address = formData.get("address")
    if(title ===""){
        return {errorTitle:"required"}
    }
    if(address ===""){
        return {errorAddress:"required"}
    }
    const response = await fetch("http://localhost:3003/address", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            address: address
        })
    })
    const data = await response.json();
    if (response.status ==200) {
        console.log("status",response.status)
    }
    //  else{

    //  }
}

// const getAddress = async () => {

//     const response = await fetch('http://localhost:3003/createAddress')
//     const data = response.json()
//     return data
  
//   }
// console.log("response",response)
export {postForm}