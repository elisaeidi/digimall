
const usecollection = async () => {
    const response = await fetch('http://localhost:3003/getProduct')
    const data = response.json()
    return data

}
import Image from 'next/image'
import Link from 'next/link'

export default async function ImageCollection({ ...props }) {
    const collection = await usecollection()
    const result = collection.filter(item => {
        return props.view.productkind.includes(item.productkind) && item.name !== props.view.name
    }).slice(0, 4)
    return (
        <div dir='rtl' className='flex flex-row overflow-x-scroll'>
            {
                result.map(item => {
                    return <Link href={`/products/${item.id}`}>
                        <div className='border border-solid border-neutral-300 rounded-lg m-2 hover:shadow-lg relative  bg-rose-700 text-white '>
                            <div>
                                < Image className='min-h-60 max-h-60 min-w-60 max-w-60 rounded-t-lg' src={item.url} width={400} height={400} />
                            </div>
                            <hr className='border-b-1' />
                            <div className='flex flex-col m-4 text-white'>
                                <label><i>قیمت :</i> {parseInt(item.price).toLocaleString("fa")}</label>
                                <label><i>نام محصول : </i> {item.name}</label>

                            </div>
                        </div></Link>
                })

            }
        </div>
    )
}