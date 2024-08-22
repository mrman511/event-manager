import Header from "@/components/global/Header"
import FormContainer from "@/components/global/FormContainer"
import Link from "next/link"

export default async function Page({ params }){
  console.log(params.id);

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