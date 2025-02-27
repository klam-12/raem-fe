import Link from 'next/link'
import React, { useState } from 'react'
// import '../styles/globals.css'


const signUp = () => {
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
                    <div className='text-displayXs_bold'>SIGN UP</div>
                    <div>Welcome to PM zone</div>
                </div>

                <div className='justify-start w-1/2 space-y-4'>
                    <div className="flex flex-col">
                        <span className='text-textMd_medium mb-1'>Name</span>
                        <input placeholder='name' name='name' type="text" className='inputCus' onChange={setInfo}></input>
                    </div>

                    <div className="flex flex-col">
                        <span className='text-textMd_medium mb-1'>Email</span>
                        <input placeholder='email@gmail.com' name='email' type="text" className='inputCus' onChange={setInfo}></input>
                    </div>

                    <div className="flex flex-col">
                        <span className='text-textMd_medium mb-1'>Password</span>
                        <input placeholder='***' name='password' type='password' className='inputCus' onChange={setInfo}></input>
                    </div>

                    <div className="flex flex-col">
                        <span className='text-textMd_medium mb-1'>Confirm password</span>
                        <input placeholder='***' name='confirmPassword' type='password' className='inputCus' onChange={setInfo}></input>
                    </div>
                </div>

                <div className='justify-start w-1/2 flex flex-col'>
                    <div className="primary_btn">
                        Sign Up
                    </div>
                    <div className='mt-8'>
                        Don't have an account? 
                        <Link href={"/"}> Sign in</Link>
                    </div>
                </div>

            </div>
            <div className="w-1/2 h-screen bg-[url(/signUp.jpg)] bg-cover"/>    
        </div>
    )
}

export default signUp