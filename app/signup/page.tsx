"use client";

import Image from 'next/image'
import React from 'react'
// import registerService from '../services/register.service';
import axios from 'axios';
import { useRouter } from 'next/navigation';



const signUpPage = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) =>{

        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/user/register', {
                name: name,
                email: email,
                password: password,
                });

                console.log("register");

                router.push("/admin")
            
        } catch (error) {
            // error = await error.json();
            console.log(error);
        }
    }


  return (
    <main className='flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen w-full justify-center items-center'>
        <div className='flex w-fit h-fit justify-center '>
            
            <div className='flex flex-col bg-white w-fit p-4 items-center rounded-md'>
                <div className='flex '>
                    <Image src="/flower.webp" alt="flower" width={136} height={136} className='pb-4 ' />
                </div>
                <form onSubmit={handleRegister}>
                    <div className='flex pb-4 '>
                        {/* <label htmlFor="name" className='flex items-center'>Name</label> */}
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" className="input input-bordered" />
                    </div>
                    <div className='flex pb-4 '>
                        {/* <label htmlFor="email" className='flex items-center'>Email</label> */}
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className='flex '>
                        {/* <label htmlFor="password"  className='flex items-center'>Password</label> */}
                        <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input input-bordered" />

                    </div>
                    <div className='flex pt-4  justify-center'>
                        <button className='btn btn-primary w-full' type='submit'>Register</button>
                    </div>
                </form>
                <div className='pt-4'>
                    <p className='text-sm text-gray-400'>Have an account? <a href="#" className='text-blue-500 hover:bg-blue-300 rounded-sm px-1 pb-1 hover:text-white'>Login</a></p>
                </div>

                
            </div>
            
        </div>
    </main>
  )
}

export default signUpPage