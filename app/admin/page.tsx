"use client";

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React, { FormEvent } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import {
Dialog,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'
import axios from 'axios';



const admin = () => {
    const router = useRouter();
    const [tname, setTname] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [deadline, setDeadline] = React.useState('');

    const onSub = async (e: React.FormEvent) =>{
        e.preventDefault();
        const res = await axios.post('http://localhost:8080/api/todos/publish', {
            task: tname,
            // username: username,
            // deadline: deadline,
        });

        setTname('');
        // setUsername('');
        // setDeadline('');
    }

  return (
    <main className='flex flex-col bg-blue-500 min-h-screen'>
        <div className='flex h-16 bg-white items-center '>
            {/* <Image src={'/menu.png'} width={15} height={20} alt={'menu'} /> */}
            <div className='flex px-4 justify-start'>
                <Button onClick={() => router.push("/")}>Public</Button>
            </div>

            <div className='flex px-4 ml-auto'>
            <div className='flex items-center px-4'>
                <p className='font-mono font-bold'>Username</p>
            </div>

            <div className="w-9 rounded-full overflow-hidden">
                <img src="/user.png" />
            </div>
                
            </div>


        </div>

        <div className='flex'>
            <div className='flex ml-auto p-4'>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Create</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle>Create</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">

                                <form onSubmit={onSub}>
                                    <div className="grid grid-cols-4 items-center pb-4 ">
                                        <Label htmlFor="Tname" className="text-left">
                                        Task Name
                                        </Label>
                                        <Input id="Tname" value={tname} className="col-span-3" onChange={(e) => setTname(e.target.value)}/>
                                    </div>
                                    {/* <div className="grid grid-cols-4 items-center pb-4">
                                        <Label htmlFor="username" className="text-left">
                                        Assigned to
                                        </Label>
                                        <Input id="username" value={username} className="col-span-3" onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                    <div className="grid grid-cols-4 items-center pb-4">
                                        <Label htmlFor="dl" className="text-left">
                                        Deadline
                                        </Label>
                                        <Input id="dl" value={deadline} className="col-span-3" onChange={(e) => setDeadline(e.target.value)} />
                                    </div> */}
                                    <div className=" items-center pb-4 ">
                                        <Button type="submit" className='h-full w-full' >Save changes</Button>
                                    </div>


                                </form>

                            </div>

                        </DialogContent>
                    </Dialog>
            </div>

        </div>
        <div className='flex flex-1'>
            <div className='flex flex-row w-full mx-6 mt-2 mb-6 bg-white rounded-sm '>
                <div className='grid grid-cols-4 w-full m-10 gap-10'>
                    <div className=' flex h-96 w-full  '>
                        <Card className='w-full bg-blue-200'>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </div>
                    
            </div>

                


            </div>
        </div>

    </main>
  )

}


export default admin