import Header from "@/components/global/Header"
import FormContainer from "@/components/global/FormContainer"
import EventsList from "@/components/events/EventsList"
import Link from "next/link"

export default async function Page(){
  // const events = await fetch('/api/events');

  return(
    <>
    <Header />
    <main className="w-full min-h-screen flex flex-col items-center">
      <div>
        <Link href={ '/myEvents/create' }>Create New Event</Link>
      </div>
      <section>
        <EventsList />
      </section>
    </main>
    </>
  )
}