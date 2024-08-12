'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import SpinLoader from "@/components/loader/SpinLoader";


export default function LoginForm({ submitForm, formData }){
  const { token } = formData
  const router = useRouter();

  function routeToPrevious(){
    router.push('/')
  }

  useEffect(()=>{
    if (token){
      routeToPrevious();
    }
  });
  
  return (
    <form
      method="POST"
      href='/api/user/login'
      onSubmit={ e => submitForm(e, '/api/user/login', routeToPrevious) }
    >
      <label>Email</label>
      <input type="text" id="email" name="email" required />
      
      <label >Password</label>
      <input type="password" id="password" name="password" required />
      
      <button type="submit">Login</button>
    </form>
  )
}

