'use client'
import { useState, useEffect } from "react";
import Link from "next/link"
import removeToken from "@/utils/helpers/tokens/removeToken"
import getToken from "@/utils/helpers/tokens/getToken";

export default function Header(){
  const [hasToken, setHasToken] = useState()

  async function checkUserToken(){
    const res = await getToken();
    setHasToken(res.success)
  }
  
  async function logout(){
    const res = await removeToken();
    setHasToken(!res.success)
  }

  useEffect(()=>{
    checkUserToken()
  });

  return (
    <header className="h-36 flex align-items-center">
      <div>
        { hasToken ? 
          <>
            <button className="hover:cursor-pointer" onClick={ logout }>Logout</button>
          </> : 
          <Link href='/user/login'>Login</Link>
        }
      </div>
    </header>
  )
}