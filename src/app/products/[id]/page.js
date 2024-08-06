
import Comments from '@/app/components/comments/page'
import ImageCollection from '@/app/components/imageCollection/page'

import Loading from '@/app/loding'
import { Suspense } from 'react'
import ViewProduct from '../viewProduct/page'


const getphotosId = async (id) => {
    const response = await fetch(`http://localhost:3003/getProduct/${id}`)

    return response.json()

}

export default async function productId({ params }) {

    const view = await getphotosId(params.id)

    return <div dir='rtl' className='p-3'>
        <Suspense fallback={<Loading />}>
            <ViewProduct view={view} />
           
            <hr className='border-b-1' />
            <div className='m-4 text-lg'>
                <lable className='text-violet-700'><i>محصولات مشابه</i></lable>
            </div>
            <ImageCollection view={view} />
            <hr className='border-b-1' />
            <Comments />
        </Suspense>
    </div>
}