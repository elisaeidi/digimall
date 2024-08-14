
"use client";

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

export default function CardComponent({ ...props }) {

    const [cardList, setCardList] = useState(props.product)

    return (
        <div className='flex-1 flex flex-row flex-wrap justify-between'>
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
                                <p><span>productName : </span>{item.name}</p>
                               <p><span>price : < /span>{item.price}</p>
                                <p>
                                    {item.productCount != 0 ? <label><span>count : </span>{item.productCount}<span></span></label>
                                        :
                                        <span className='text-red-500'>unavailable</span>}</p>
                            </div>
                        </div>
                    </Link>
                })
            }

        </div>
    )
}