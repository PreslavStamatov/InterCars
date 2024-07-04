import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  
    <div className='primaryTheme bg-white border-solid border-2 border-bg-primary flex flex-col justify-center items-center m-auto relative h-4/5 w-1/3 box-border rounded-xl' style={{top:'15%'}}>
      <p className='m-3 mb-10 text-center text-4xl font-bold text-login-text-color'>Login</p>
      <input className='bg-bg-secondary m-3 h-12 w-3/4 p-3 rounded-input-field border-solid border-2 border-bg-primary' type="email" name="email" placeholder='Email' id="" required/>
      <input className='bg-bg-secondary m-3 h-12 w-3/4 p-3 rounded-input-field border-solid border-2 border-bg-primary' type="password" name="password" placeholder='Password' id="" required/>
      <button className='bg-button-primary m-3 h-11 w-1/5 hover:bg-button-hovered active:bg-button-primary rounded-xl text-button-text-color'>Sign in</button>
    </div>
  
  
  )
}
