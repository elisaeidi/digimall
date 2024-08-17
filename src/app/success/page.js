import Link from "next/link";

export default function Success() {
    return (
        <div className="flex-1 flex flex-row justify-center items-center">
            <div className=" border border-blue-500 rounded-lg p-20">
                <div>
                    <p className="text-green-500 font-bold text-base">پرداخت با موفقیت اتجام شد </p>
                    <p className="text-gray-400 mt-4 text-sm"><span>کد رهگیری : </span> <span>123456789</span></p>
                </div>
                <button className="bg-blue-500 text-white border border-blue-500 rounded-lg px-4 mt-4 flex flex-row justify-end">
                    <Link href="/home">تایید</Link>
                </button>
            </div>
        </div>
    )
}