import Header from "@/components/global/Header"
import FormContainer from "@/components/global/FormContainer"


export default async function Page(){
  // const events = await fetch('/api/events');

  return(
    <>
    <Header />
    <main className="w-full min-h-screen flex flex-col items-center">
      <section>
        <FormContainer formPath={ 'events/EventForm' } />
      </section>
    </main>
    </>
  )
}