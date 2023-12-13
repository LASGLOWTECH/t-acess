
"use client";
import Link from "next/link";
import { FormEvent } from "react";
export default function Form(){

    
  const onRegister = async (e:FormEvent<HTMLFormElement>) => {

    e.preventDefault(); 
    const formData=  new   FormData (e.currentTarget);
    const response= await fetch('/api/auth/signup',{
      method:'POST',
      body:JSON.stringify({
        username:formData.get('username'),
     email:formData.get('email'),
  password:formData.get('password'),
      }),

    });
    console.log({response});
    
  }

return(
    <div className=" ">

    <div className='py-8 px-6  overlay relative w-full h-full bg-darkBlue backdrop-brightness-100 flex justify-center items-center flex-col'>
      < h3 className=" font-medium  text-4xl  ps-5  py-6 text-darkGreen "></h3>


      <form  onSubmit={onRegister }
       className=" flex flex-col justify-center md:w-auto w-full py-5 px-6 md:px-20  bg-opacity-25 rounded-2xl bg-darkBlue shadow-lg " >

        {/* Name form */}
        <div className="email-send flex justify-beween flex-col ">

          <label htmlFor="username" className="pt-3 pb-2   text-white text-lg font-medium " >Username<sup className="text-red-500">*</sup></label>


          <input type="text"
            id="username"
          name="username"
            
            className="ps-5   focus:outline-none shadow-md border-double py-2 mt-2 w-full text-base  "
            placeholder="Username" />


        </div>



        <div className="email-send flex justify-beween flex-col ">

          <label htmlFor="email" className="pt-3 pb-2   text-white text-lg font-medium " >Email<sup className="text-red-500">*</sup></label>


          <input type="text"
        name="email"
            id="email"
           
            className="ps-5  border focus:outline-none shadow-md border-double py-2 mt-2 w-full text-base  "
            placeholder="Email" />


        </div>


        <div className="email-send flex justify-beween flex-col ">

          <label htmlFor="password" className="pt-3 pb-2   text-white text-lg font-medium " >Email<sup className="text-red-500">*</sup></label>


          <input type="password"
            name="password"
            id="password"
        
            className="ps-5  border focus:outline-none shadow-md border-double py-2 mt-2 w-full text-base  "
            placeholder="Password" />


        </div>


        <div className="submit flex  flex-col justify-start ">
          <button
           
          
            className="text-lg text-white flex place-self-start  focus:outline-none rounded-md px-16 py-2  my-3 bg-darkGreen"
            >Register</button>

        </div>
        <span className="flex flex-row pt-6 ">
          <p className=" text-lg   ps-5  text-white">Registered? </p>
          <Link href="/login" className="ps-5 font-medium text-darkGreen">Sign in</Link>
        </span>






      </form>
    </div>
  </div>
)



}