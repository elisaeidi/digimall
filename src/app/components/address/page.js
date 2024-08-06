
import Link from 'next/link';
export default function Address() {

// const addressList =["محل کار","خانه"]
const addressList =[]

    return (

        <div className="flex-1 flex flex-col justify-center">
            <label className="text-violet-500 mx-2"><b>انتخاب آدرس</b></label>
                {
                    addressList.length > 0 ?
                            <select className="border rounded-lg py-2 w-6/12 outline-none hover:shadow-lg">
                            {
                                addressList.map(item =>{
                                    return <option >{item}</option> 
                                })
                            }
                                
                            </select>
                        :
                        <div>
                            <Link href='/createaddress'>
                                <button className="hover:shadow-lg bg-violet-500 text-white p-2 rounded-md m-4"> ایجاد آدرس </button>
                            </Link>
                        </div>
                }
            </div>
    )
}