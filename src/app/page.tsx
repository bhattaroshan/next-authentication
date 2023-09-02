'use client'
import Image from 'next/image'

export default async function Home() {

  async function handleClick(){
    const res = await fetch('/api/post',{
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify({name:'Roshan',email:'torihere@gmail.com'})
    })
  }

  return (
    <div>
      <button onClick={handleClick}>OK</button>
    </div>
  )
}
