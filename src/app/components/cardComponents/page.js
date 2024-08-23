
"use client";

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import Sprator from '../sprator/page';

export default function CardComponent({ ...props }) {

    const [cardList, setCardList] = useState(props.product)

    return (
        <div dir='rtl' className='flex-1 flex flex-row flex-wrap justify-between mobile:justify-center mobile:min-w-full'>
            {
                cardList.map((item, index) => {
                    return <Link
                        className='rounded-lg border border-orange-600 bg-orange-600 text-white m-2'
                        href={`/products/${item.id}`}
                        key={index}
                    >
                        <div className='relative rounded-lg'>
                            <Image className='overflow-hidden rounded-t-lg hover:shadow-md shadow-red-900 min-h-60 max-h-60 min-w-60 max-w-60' layout='fixed' width={200} height={200} src={item.url} />
                            <div className='flex-wrap p-2'>
                                <p><span>نام محصول : </span>{item.name}</p>
                                <Sprator num={parseInt(item.price).toLocaleString("fa")} name='قیمت' color="white" />
                                <p>
                                    {item.productCount != 0 ? <Sprator num={parseInt(item.productCount).toLocaleString("fa")} name='تعداد' currencyUnit={false}/>
                                        :
                                        <span className='text-red-500'>ناموجود</span>}</p>
                            </div>
                        </div>
                    </Link>
                })
            }

        </div>
    )
}