

export default function App() {
    props.flag = true

    return (
        <div className='flex flex-row justify-center items-center h-screen bg-cover bg-center bg-custom-image mobile:min-w-full'>
            <div className=" flex flex-col justify-center items-center bg-cyan-950 border border-cyan-950 rounded-lg px-8 py-4">
                <label className="text-violet-500">به دیجی مال خوش آمدید دوست داری از کجا شروع کنی؟</label>
                <div className="min-w-full flex flex-row justify-around p-4">
                    <button className="text-white border border-green-600 rounded-lg p-2 mt-16 mx-4 bg-green-600">می خوام عضو بشم</button>
                    <button className="text-white border border-blue-600 rounded-lg p-2 mt-16 mx-4 bg-blue-600">می خوام محصولات رو ببینم</button>
                </div>
            </div>
        </div>
    )
}