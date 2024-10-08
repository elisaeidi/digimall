"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const state = useSelector((state => state.shoppingCart))

    return (
        <div dir='rtl'>
                <div className='mobile:flex flex-row'>
                    <Link href='/home' className='flex mx-2 my-4 hoverLink mobile:mt-8 mobile:mr-8' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        <li className='list-none mx-1 mobile:hidden'>خانه</li>
                    </Link>
                    <Link href='/profile' className='flex mx-2 my-4 hoverLink mobile:mt-8 mobile:mr-6' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <li className='list-none mobile:hidden'>اطلاعات کاربری</li>
                    </Link>
                    <Link href='/products' className='flex mx-2 my-4 hoverLink mobile:mt-8 mobile:mr-6' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        <li className='list-none mx-1 mobile:hidden'>محصولات</li>
                    </Link>
                    <Link href='/shoppingCart' className='flex mx-2 my-4 hoverLink mobile:mt-8 mobile:mr-6' >
                        <Image src={"/images/cartshoppingIcon.svg"} width={25} height={25} />
                        <span className=' hidden text-orange-600  mobile:inline-block'><b>{state.cart.length > 0 ? state.cart.length.toLocaleString("fa") : ''}</b></span>

                        <li className='list-none mx-1 mobile:hidden'>سبد خرید
                            <span className='text-orange-600 mx-2'><b>{state.cart.length > 0 ? state.cart.length.toLocaleString("fa") : ''}</b></span>
                        </li>
                    </Link>
                </div>
                <div className='fixed bottom-2'>
                    <Link href='/aboatMe' className='flex mx-2 my-4 hoverLink mobile:mt-8 mobile:mr-6' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                        <li className='list-none mx-1 mobile:hidden'>درباره من</li>
                    </Link>
                </div>

        </div>
    )
}