import Header from "@/components/global/Header"
import LoginForm from "@/components/user/login/LoginForm"
// import Confirmation from "@/components/global/Confirmation";
import FormContainer from "@/components/global/FormContainer";
import { cookies } from "next/headers"

export default async function Login(){
  const cookieStore = cookies();
  const token  = cookieStore.get('token')
  
  return(
    <>
    <Header token={ token }/>
    <main className="w-full min-h-screen flex flex-col items-center">
      <section>
        <FormContainer formPath={'user/login/LoginForm'} formData={{ token: token }}/>
      </section>
    </main>
    </>
  )
}
