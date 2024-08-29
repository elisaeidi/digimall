import Link from "next/link";

export default function Success() {
    return (
        <div className=" flex-1 flex flex-col mobile:px-4 justify-center items-center h-screen">
            <div className="mobile:min-w-full  border border-blue-500 rounded-lg w-2/4">
                <div className="flex flex-col justify-center items-center p-4">
                    <p className="text-green-500 font-bold text-base">پرداخت با موفقیت اتجام شد </p>
                    <p className="text-gray-400 mt-4 text-sm"><span>کد رهگیری : </span> <span>123456789</span></p>
                </div>
                <div className="flex flex-row justify-between items-center p-4">
                    <button className="bg-green-500 text-white border border-green-500 rounded-lg px-4 py-2 mt-4 flex flex-row justify-end">
                        <Link href="/home"><span> بازگشت </span></Link>
                    </button>
                    <button className="bg-blue-500 text-white border border-blue-500 rounded-lg px-4 py-2 mt-4 flex flex-row justify-end">
                        <Link href="/home"><span> جزییات </span></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}