"use client"
import Link from "next/link";
// import { useRouter } from "next/router"
import Sprator from "../components/sprator/page";
import { useSearchParams } from "next/navigation";

export default function Gateway() {
    const searchParams = useSearchParams();
    const sum = searchParams.get("sum")
    return (
        <div className="flex-1 flex flex-row justify-center items-center">
            <div dir="rtl" className="flex-1 flex flex-col border border-violet-700 rounded-lg m-4 p-4">
                <div className="flex flex-row justify-center  text-violet-500  p-4">
                    {/* <div className="flex flex-row justify-around m-8">
                        <input type="number" className="border rounded-lg w-16 p-2"/>
                        <input type="number" className="border rounded-lg w-16 p-2"/>
                        <input type="number" className="border rounded-lg w-16 p-2"/>
                        <input type="number" className="border rounded-lg w-16 p-2"/>
                    </div> */}
                    <Sprator num={sum} name='مبلغ خرید شما ' />
                </div>
                <div className="flex flex-row justify-around m-6">
                    <Link href={"/success"}>
                        <button className="border outline-none hover:shadow-md bg-lime-500 rounded-lg text-white p-2">موفقیت امیز</button>
                    </Link>
                    <Link href={"/unsuccess"}>
                        <button className="border outline-none hover:shadow-md bg-rose-500 rounded-lg text-white p-2">ناموفق </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}