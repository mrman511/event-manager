import { cookies } from "next/headers"

export default function handleUserCookies(){
  const cookieStore = cookies();
  const user = cookieStore.get('user');

  function login (cookie){
    cookies().set('user', cookie, {
      path: '/',
      maxAge: 24 * 3600,
    })
  }

  function logout (){
    cookies().delete('user')
  }

  return {user, login, logout }
}