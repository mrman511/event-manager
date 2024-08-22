import Header from "@/components/global/Header"
import Link from "next/link"

export default async function Page({ params }){
  // const events = await fetch('/api/events');

  return(
    <>
    <Header />
    <main className="w-full min-h-screen flex flex-col items-center">
      <h3>Invitations</h3>
    </main>
    </>
  )
}