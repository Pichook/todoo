"use client";

import Image from 'next/image'
import React from 'react'
// import loginService from '../services/login.service';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const loginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/user/login', {
                email: email,
                password: password,
                });

                console.log("login");
                
                router.push("/admin");

        } catch (error) {
            console.log(error);
        }
    }




  return (
    <main className='flex bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500  h-screen w-full justify-center items-center'>
        <div className='flex w-fit h-fit justify-center '>
            
            <div className='flex flex-col bg-white w-fit p-4 items-center rounded-md'>
                <div className='flex '>
                    <Image src="/flower.webp" alt="flower" width={136} height={136} className='pb-4 ' />
                </div>
                <form onSubmit={handleLogin}>
                    <div className='flex pb-4 '>
                        {/* <label htmlFor="login" className='flex items-center'>Email</label> */}
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className='flex '>
                        {/* <label htmlFor="password" className='flex items-center'>Password</label> */}
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input input-bordered" />

                    </div>
                    <div className='flex pt-4  justify-center'>
                        <button className='btn btn-primary w-full' type='submit'>Login</button>
                    </div>
                </form>
                <div className='pt-4'>
                    <p className='text-sm text-gray-400'>Don't have an account? <a href="#" className='text-blue-500 hover:bg-blue-300 rounded-sm px-1 pb-1 hover:text-white'>Sign up</a></p>
                </div>
                <div className='pt-2'>
                    <p className='text-sm text-gray-400'>Or <a href="#" className='text-blue-500 hover:bg-blue-300 rounded-sm px-1 pb-1 hover:text-white'>Forgot Password? </a></p>
                </div>

                
            </div>
            
        </div>
    </main>
  )
}

export default loginPage