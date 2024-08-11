'use client'

import { useEffect } from "react";
import useVisualMode from "@/utils/helpers/useVisualMode";
import { useRouter } from "next/navigation";

import SpinLoader from "@/components/loader/SpinLoader";


export default function LoginForm({ token }){
  const { mode, transition } = useVisualMode('FORM')
  const router = useRouter();


  async function submit(e){
    e.preventDefault();
    transition('LOADER');
    try {
      const formData = new FormData(e.target)
      let response = await fetch('/api/user/login', {
        method: 'POST',
        body: formData,
        cache: 'no-store'
      });
      response=await response.json()
      router.push('/')
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    if (token){
      router.push('/');
    }
  });
  
  return (
    <>
      { mode === "FORM" && <form
        method="POST"
        onSubmit={ e => submit(e) }
      >
        <label>Email</label>
        <input type="text" id="email" name="email" required />
        
        <label >Password</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Login</button>
      </form> }
      { mode === "LOADER" && <SpinLoader /> }
    </>
  )
}

