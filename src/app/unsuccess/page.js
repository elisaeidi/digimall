
import Link from "next/link";

export default function UnSuccess() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center h-screen">
            <div className="border border-blue-500 rounded-lg w-2/4">
                <div className="flex flex-col justify-center items-center p-4">
                    <p className="text-rose-500 font-bold text-base">  !تراکنش ناموفق  </p>
                </div>
                <div className="flex flex-row justify-between items-center p-4">
                    <button className="bg-green-500 text-white border border-green-500 rounded-lg px-4 py-2 mt-4 flex flex-row justify-end">
                        <Link href="/shoppingCart"><span> تلاش مجدد </span></Link>
                    </button>
                    <button className="bg-blue-500 text-white border border-blue-500 rounded-lg px-4 py-2 mt-4 flex flex-row justify-end">
                        <Link href="/home"><span> جزییات </span></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}