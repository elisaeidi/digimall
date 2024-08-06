"use client";

import Sprator from '@/app/components/sprator/page'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../../redux/slices/cartslice'
import { useState } from 'react';

export default function ViewProduct({ ...props }) {
    const view = props.view
    const dispatch = useDispatch()
    const handleAddToCart = (view) => {
        console.log('view in console is', view)
        dispatch(removeFromCart(view.id))
        dispatch(addToCart({ view, qty: quantity }))
    }
    const [quantity, setQuantity] = useState(1)

    return (
        <div dir='rtl' className='text-violet-500'>
        {
            view.productCount !== 0 ?
                <div className='flex flex-col m-4 '>
                    <div className='flex-1 flex flex-row items-center p-4'>
                        <Image
                            src={view.url}
                            width={250} height={150}
                            alt={view.name}
                        />
                        <div className='mx-4'>
                            <label><i>نام محصول :</i> <span className="text-gray-400">{view.name}</span></label>

                            <Sprator num={parseInt(view.price).toLocaleString("fa")} name='قیمت' />
                            {/* <label>{view.discription}</label> */}
                            <label><i>توضیحات :</i> <span className='text-ellipsis overflow-hidden text-gray-400'> {view.discription}</span></label>
                        </div>

                    </div >
                    <div>
                        <div className='flex-1 flex flex-row justify-center items-center my-8'>
                            <div >
                                <button className='border rounded-xl px-4 py-2 mt-2 mx-4 hover:shadow-md hover:bg-green-400 text-gray-400 hover:text-white mb-4' onClick={() => { handleAddToCart(view) }}>افزودن به سبد خرید</button>

                            </div>
                            {/*counter*/}
                            <div className='flex flex-row '>
                                <button className=' outline-none bg-blue-100 p-2 rounded-lg border border-blue-100 hover:bg-blue-300 ' onClick={() => quantity < view.productCount && setQuantity(prevqty => prevqty + 1)}>
                                <Image src={'/images/plussvgrepocom.svg'} width={10} height={10} />
                                </button>
                                <p className='mx-2'>{parseInt(quantity).toLocaleString("fa")}</p>
                                <button className=' outline-none bg-rose-100 p-2 rounded-lg border border-rose-100 hover:bg-rose-300 ' onClick={() => quantity > 0 && setQuantity(prevqty => prevqty - 1)}>
                                <Image src={'/images/minus.svg'} width={10} height={10} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                : 
                <div className='flex flex-col m-4 '>
                <div className='flex-1 flex flex-row'>
                    <Image
                        src={view.url}
                        width={150} height={150}
                        alt={view.name}
                    />
                    <div className='mx-4'>
                        <labl><i><b>Product Name :</b></i> <span>{view.name}</span></labl>

                        <Sprator num={view.price} name='price' />
                        <textarea className='flex-1 flex flex-wrap p-2' rows={4} >{view.discription}</textarea>
                    </div>

                </div >
                <div>
                    <div className='flex-1 flex flex-row justify-center'>
                        <label className='text-rose-600'>this product is unavilable !!! 🤦‍♂️</label>
                    </div>
                </div>
            </div>
            }
            </div>

    )
}

