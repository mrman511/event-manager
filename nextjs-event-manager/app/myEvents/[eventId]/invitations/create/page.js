import Header from "@/components/global/Header"
import FormContainer from "@/components/global/FormContainer"
import InvitaionForm from "@/components/events/invitations/InvitationForm"
// import handleUserCookies from "@/utils/helpers/handleUserCookies";

export default async function Page({ params }){
  const formPath = `/api/events/${ params.eventId }/invitations`

  return(
    <>
    <Header />
    <main className="w-full min-h-screen flex flex-col items-center">
      
      <section>
        <FormContainer formPath={ 'events/invitations/InvitationForm' } formData={{ path: formPath }} />
      </section>
    </main>
    </>
  )
}