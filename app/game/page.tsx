"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import { DropdownMenuRadioGroupDemo } from '@/components/ui/dropGame'
import {useRouter} from 'next/navigation';


const Game : React.FC = () => {
  const router  = useRouter();
  const handleLogout = () => {
    router.push("/login");
  }
  return (
    <main>
      <div className='flex flex-col'>
        <div className='flex flex-row '>
          <div className='flex justify-start border-black border-1 shadow-md w-full'>
            <div className='flex p-2 items-center'>

              <Image src="/flower.webp" alt="flower" width={80} height={80}  />


            </div>
            <div className='flex p-1 ml-auto items-center'>

              <Button variant="ghost" className='font-semibold font-mono mx-2'>Play</Button>
              <Button variant="ghost" className='font-semibold font-mono mx-2'>My Quiz</Button>
              <Button  className='font-semibold font-mono mx-4' onClick={handleLogout}>Log out</Button>
              <DropdownMenuRadioGroupDemo />
            </div>
          </div>


           
        </div>
        <div className='flex flex-row h-1/2 bg-gray-300 justify-center' id='carousel'> 
          <div className="carousel w-3/5 h-fit py-20  items-center ">

            <div className="carousel-item w-1/2  justify-center rounded-box">
              <div className="flex flex-row card bg-base-100 shadow-xl items-center w-4/5">

                <div className="card-body flex ">
                  <h2 className="card-title text-3xl">
                    Geo-Trivia!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p className='my-8'>A 20 question quiz on the vast countries of planet Earth! Challenge your mind and friends on who's the better guessor!</p>
                  <button className='btn btn-accent w-1/4 font-bold text-lg'>Start</button>
                </div>

              </div>

            </div> 
            <div className="carousel-item w-1/2  justify-center rounded-box">
              <div className="flex flex-row card bg-base-100 shadow-xl items-center w-4/5">
              <div className="card-body flex">
                  <h2 className="card-title text-3xl">
                    Geo-Trivia!
                    <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p className='my-8'>A 20 question quiz on the vast countries of planet Earth! Challenge your mind and friends on who's the better guessor!</p>
                      <button className='btn btn-accent w-1/4 font-bold text-lg'>Start</button>
                    </div>
                </div>
            </div> 
            <div className="carousel-item w-1/2  justify-center rounded-box">
              <div className="flex flex-row card bg-base-100 shadow-xl items-center w-4/5">
                <div className="card-body flex ">
                    <h2 className="card-title text-3xl">
                      Geo-Trivia!
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='my-8'>A 20 question quiz on the vast countries of planet Earth! Challenge your mind and friends on who's the better guessor!</p>
                    <button className='btn btn-accent w-1/4 font-bold text-lg'>Start</button>
                  </div>
                </div>
            </div> 
            <div className="carousel-item w-1/2 justify-center rounded-box">
              <div className="flex flex-row card bg-base-100 shadow-xl items-center w-4/5">
                <div className="card-body flex ">
                    <h2 className="card-title text-3xl">
                      Geo-Trivia!
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='my-8'>A 20 question quiz on the vast countries of planet Earth! Challenge your mind and friends on who's the better guessor!</p>
                    <button className='btn btn-accent w-1/4 font-bold text-lg'>Start</button>
                  </div>
                </div>
            </div> 

          </div>





        </div>
        <div className='flex justify-center items-center my-20'>

          <div className='flex flex-row gap-16'>
            <div className="card flex w-96 bg-base-100 shadow-xl ">
              <figure><img src="/img3.svg" /></figure>
              <div className="card-body">
                <h2 className="card-title">Create</h2>
                <p>It only takes minutes to create a learning game or trivia quiz on any topic, in any language.</p>
                <div className="card-actions justify-end">
                  <Button className="btn btn-primary">Build</Button>
                </div>
              </div>
            </div>
            <div className="card flex w-96 bg-base-100 shadow-xl">
              <figure><img src="/img4.svg" /></figure>
              <div className="card-body">
                <h2 className="card-title">Host or share</h2>
                <p>Host a live game with questions on a big screen or share a game with remote players.</p>
                <div className="card-actions justify-end">
                  <Button className="btn btn-primary">Share</Button>
                </div>
              </div>
            </div>
            <div className="card flex w-96 bg-base-100 shadow-xl">
              <figure><img src="/img5.svg" /></figure>
              <div className="card-body">
                <h2 className="card-title">Play</h2>
                <p>Game on! Join a kahoot with a PIN provided by the host and answer questions on your device.</p>
                <div className="card-actions justify-end">
                  <Button className="btn btn-primary">Start</Button>

                </div>
              </div>
            </div>
          </div>


        </div>

        <div className='flex py-10 bg-yellow-200 justify-center'>
          {/* <Image src={'/building.jpeg'} alt={'notDone'} width={300} height={300}></Image> */}
          <img src="/building.jpeg" alt="building"  />
        </div>

      </div>
    </main>
  )
}

export default Game