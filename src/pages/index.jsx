import Link from 'next/link'
import React, { useState } from 'react'
import '../styles/globals.css'


const signIn = () => {
    const [account, setAccount] = useState({
        username: '',
        password: '',
    })

    const setInfo = (e) => {
        setAccount((prev) => {
                return {
                    ...prev,
                    [e.target.name]: e.target.value,
                }
            }
        )
    }

    return (
        <div className='w-screen flex bg-background '>

            <div className="relative w-1/2 h-screen flex flex-col justify-center items-center space-y-8 text-white">
                {/* <div class="absolute -z-0 top-0 left-0 inset-0 bg-[url('/blob1.svg')] "></div> */}

                <div className='justify-start w-1/2'>
                    <div className='text-displayXs_bold'>SIGN IN</div>
                    <div>Welcome back! Please enter your details</div>
                </div>

                <div className='justify-start w-1/2 space-y-4'>
                    <div className="flex flex-col">
                        <span className='text-textMd_medium mb-1'>Email</span>
                        <input placeholder='email@gmail.com' name='username' type="text" className='inputCus' onChange={setInfo}></input>
                    </div>

                    <div className="flex flex-col">
                        <span className='text-textMd_medium mb-1'>Mật khẩu</span>
                        <input placeholder='***' name='password' type='password' className='inputCus' onChange={setInfo}></input>
                    </div>
                </div>

                <div className='justify-start w-1/2 flex flex-col'>
                    <div className="primary_btn">
                        Sign In
                    </div>
                    <div className='mt-8'>
                        Don't have an account? 
                        <Link href={"/signUp"}> Sign up</Link>
                    </div>
                </div>



            </div>
            <div className="w-1/2 h-screen bg-[url(/signIn.jpg)] bg-cover"/>    
        </div>
    )
}

export default signIn