import Header from "@/components/global/Header"

export default async function Page({ params }){
  

  return(
    <>
    <Header />
    <main className="w-full min-h-screen flex flex-col items-center">
      <section>
        <p>{ params.eventId }</p>
      </section>
    </main>
    </>
  )
}