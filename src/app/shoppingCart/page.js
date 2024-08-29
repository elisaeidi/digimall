"use client";

import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'
import { clearCart, decrement, increment, removeFromCart } from "../../../redux/slices/cartslice";
import { useEffect, useState } from "react";
import Link from 'next/link';
import Address from "../components/address/page";
import Post from "../components/post/Post";

export default function ShoppingCart() {
    const state = useSelector((state => state.shoppingCart))

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1)
    let [totalPrice, setTotalPrice] = useState(0)

    let total = 0
    let sum = 0
    let listOfTotal = []
    let resultOfTotalPrice = 0
    let listOfTotalPrice = []

    useEffect(() => {
        const result = state.cart.map(item => {
            return item.price
        })
        console.log("result is::", result)
        setTotalPrice(result)
      listOfTotalPrice.forEach(item => resultOfTotalPrice += item)

    }, [])
    return (
        <div dir="rtl" className="text-violet-700 text-base">
            {
                state.cart.length > 0 ?
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center p-4 shrink">
                            {/* سبد خرید */}
                            <label className="text-violet-500 mx-4 mt-4 mb-2 text-2xl mobile:text-lg"><i>سبد خرید</i></label>
                            <hr />
                            <table className="flex-1 flex flex-col mobile:flex-row border-collapse text-sm text-left rtl:text-right border border-violet-500 ">
                                <thead className="bg-violet-500 text-white py-2 mobile:hidden">
                                    <tr className="flex-1 flex flex-row justify-evenly  items-center px-2">
                                        <th className="w-full flex justify-center">

                                        </th>
                                        <th className="w-full flex justify-center text-base">
                                            نام محصول
                                        </th>
                                        <th className="w-full flex justify-center text-base">
                                            قیمت
                                        </th>
                                        <th className="w-full flex justify-center text-base">
                                            تعداد
                                        </th>
                                        <th className="w-full flex justify-center text-base">
                                            جمع کل
                                        </th>
                                        <th className="w-full flex justify-center text-base">
                                        </th>
                                    </tr>

                                </thead>
                                <tbody className="mobile:flex-1 ">
                                    {
                                        state.cart.map((item => {
                                            total = item.discount ? ((item.price * item.discount) / 100) * item.qty : item.price * item.qty
                                            listOfTotal.push(total)

                                            return <tr key={item.id} className="flex-1 flex flex-row mobile:flex-col justify-evenly items-center even:bg-gray-50 hover:bg-violet-100 hover:text-white hover:text-base border border-violet-200">
                                                <div className="hidden flex-1 mobile:min-w-full mobile:flex flex-row mobile:justify-start mobile:items-center">
                                                    <td className="">
                                                        {/* <td className="flex justify-center  w-full"> */}
                                                        <Link href={`./products/${item.id}`}>
                                                            <Image className='overflow-hidden min-h-20 max-h-20 min-w-20 max-w-20' width={50} height={50} src={item.url} />
                                                        </Link>
                                                    </td>
                                                    <div className="flex-1 flex flex-row mobile:flex flex-col mobile:pr-4">
                                                        <td>{item.name}</td>
                                                        <td className="flex flex-col">
                                                            {item.discount ?
                                                                <label><span className="text-gray-300"><del>{parseInt(item.price).toLocaleString("fa")}</del></span><span className="text-rose-400 text-xs">{item.discount.toLocaleString("fa")}%</span></label> : ''}
                                                            <br className="mobile:hidden" />
                                                            <span> {item.discount ? ((item.price * item.discount) / 100).toLocaleString("fa") : parseInt(item.price).toLocaleString("fa")}</span>
                                                        </td>
                                                    </div>
                                                </div>
                                                <td className="mobile:hidden flex justify-center w-full">
                                                    {/* <td className="flex justify-center  w-full"> */}
                                                    <Link href={`./products/${item.id}`}>
                                                        <Image className='mobile:hidden overflow-hidden min-h-20 max-h-20 min-w-20 max-w-20' width={50} height={50} src={item.url} />
                                                    </Link>
                                                </td>
                                                <td className="mobile:hidden w-full flex justify-center">{item.name}</td>
                                                <td className="mobile:hidden flex flex-col  items-center justify-center w-full">
                                                    {item.discount ?
                                                        <label><span className="mobile:hidden text-gray-300"><del>{parseInt(item.price).toLocaleString("fa")}</del></span><span className="mobile:hidden text-rose-400 text-xs">{item.discount.toLocaleString("fa")}%</span></label> : ''}
                                                    <br className="mobile:hidden" />
                                                    <span> {item.discount ? ((item.price * item.discount) / 100).toLocaleString("fa") : parseInt(item.price).toLocaleString("fa")}</span>
                                                </td>

                                                <div className="hidden mobile:min-w-full mobile:flex-1 mobile:flex flex-row mobile:justify-between mobile:items-center">
                                                    <div className="mobile:flex flex-row mobile:pr-4 mobile:py-2">
                                                        <td className="flex justify-center items-center w-full">
                                                            <button className="cursor-pointer  outline-none bg-blue-100 px-2 rounded-lg border border-blue-100 hover:bg-blue-300 " onClick={() => item.qty < item.productCount && dispatch(increment(item.id))}>+</button>
                                                            <span className="mx-2">{item.qty.toLocaleString("fa")}</span>
                                                            <button className="cursor-pointer  outline-none bg-rose-100 px-2 rounded-lg border border-rose-100 hover:bg-rose-300 " onClick={() => item.qty > quantity && dispatch(decrement(item.id))}>-</button>
                                                        </td>
                                                        <td className="flex justify-center">{total.toLocaleString("fa")}</td>
                                                        {/* <td className="flex justify-center w-full">{item.discount ? ((item.price * item.discount) / 100) * item.qty : item.price * item.qty}</td> */}

                                                    </div>
                                                    <td className="flex justify-center mobile:justify-end mobile:pl-2 w-full">
                                                        <span className="cursor-pointer text-rose-500" onClick={() => dispatch(removeFromCart(item.id))}>حذف</span>
                                                    </td>
                                                </div>
                                                <td className="flex justify-center items-center w-full mobile:hidden ">
                                                    <button className=" mobile:hidden cursor-pointer  outline-none bg-blue-100 px-2 rounded-lg border border-blue-100 hover:bg-blue-300 " onClick={() => item.qty < item.productCount && dispatch(increment(item.id))}>+</button>
                                                    <span className="mx-2 mobile:hidden ">{item.qty.toLocaleString("fa")}</span>
                                                    <button className=" mobile:hidden cursor-pointer  outline-none bg-rose-100 px-2 rounded-lg border border-rose-100 hover:bg-rose-300 " onClick={() => item.qty > quantity && dispatch(decrement(item.id))}>-</button>
                                                </td>
                                                <td className=" mobile:hidden flex justify-center w-full">{total.toLocaleString("fa")}</td>
                                                {/* <td className="flex justify-center w-full">{item.discount ? ((item.price * item.discount) / 100) * item.qty : item.price * item.qty}</td> */}

                                                <td className=" mobile:hidden flex justify-center mobile:justify-end mobile:pl-2 w-full">
                                                    <span className=" mobile:hidden cursor-pointer text-rose-500" onClick={() => dispatch(removeFromCart(item.id))}>حذف</span>
                                                </td>
                                            </tr>
                                        }))
                                    }

                                </tbody>
                            </table>
                            {
                                listOfTotal.forEach(item => sum += item)
                            }
                            <div className="flex-1 flex flex-row justify-end">
                                <button className="hover:shadow-lg bg-violet-500 hover:bg-rose-500 text-white p-4 rounded-md m-4 mobile:text-sm"
                                    onClick={() => dispatch(clearCart())}>پاک کردن سبد خرید</button>
                            </div>
                        </div>
                        {/* تکمیل خرید */}
                        <div>
                            <label className="text-violet-500 mx-4 my-2 pr-4 text-2xl mobile:text-lg"><i>تکمیل خرید</i></label>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1 flex flex-col justify-center p-4 shrink border border-violet-500 m-4">
                                <div className="flex flex-row mobile:flex-col justify-around  my-4">
                                    <Address />
                                    <Post />
                                </div>
                                <div className="flex flex-col items-start justify-center px-2 my-4">
                                    {/* <div className="my-2">
                                        <label className="text-rose-500"><b> سود شما در این خرید: </b></label>
                                        <label className="text-rose-500"> {resultOfTotalPrice.toLocaleString("fa")} </label>
                                    </div> */}
                                    <div className="my-2">
                                        <label className="text-rose-500"><b> مبلغ کل : </b></label>
                                        <label className="text-rose-500"> {sum.toLocaleString("fa")} </label>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-row justify-end">
                                    <Link href={{
                                        pathname: './paymentGateway',
                                        query: {
                                            sum: sum
                                        }
                                    }} >
                                        <button className="hover:shadow-lg  bg-green-500 text-white p-2 rounded-md m-4">تایید و پرداخت</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex-1 flex flex-col items-center mt-8 mobile:mt-40 mobile:min-w-full">
                        <Image src="/images/emptyCart.webp" width={500} height={500} />
                        <p className="text-rose-500"> <b> هیچ محصولی در سبد خرید شما نیست </b></p>
                    </div>
            }
        </div >
    )
}