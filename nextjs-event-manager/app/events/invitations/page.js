import Header from "@/components/global/Header"
import FormContainer from "@/components/global/FormContainer"
import InvitaionForm from "@/components/events/invitations/InvitationForm"
// import handleUserCookies from "@/utils/helpers/handleUserCookies";

export default async function Invitation(){

  return(
    <>
    <Header />
    <main className="w-full min-h-screen flex flex-col items-center">
      
      <section>
        {/* <FormContainer FormComponent={ InvitaionForm } /> */}
        {/* <InvitaionForm /> */}
      </section>
    </main>
    </>
  )
}