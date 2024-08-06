export default function () {
    return (
        <div className="flex-1 flex flex-col justify-center">
            <label className="text-violet-500 mx-2"><b>پست</b></label>
            <select className="border rounded-lg py-2 w-6/12 outline-none hover:shadow-lg">
                <option>معمولی</option>
                <option>پیشتاز</option>
                <option>تیپاکس</option>
            </select>
        </div>
    )
}