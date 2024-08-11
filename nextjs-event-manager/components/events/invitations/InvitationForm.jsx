'use client'

import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import InvitationFormInputs from "./InvitationsFormInputs";

export default function InvitaionForm({ handleFormSubmit }){
  const [ numInvites, setNumInvites ] = useState(1);
  const searchParams = useSearchParams();
  const eventId = searchParams.get('event');
  const formRef = useRef();

  const parsedInvitationsFormSections = [];

  for (let i = 0; i < numInvites; i++ ){
    parsedInvitationsFormSections.push(<InvitationFormInputs key={`invite-form-key-${i}`} />);
  };

  function increaseInvites (){
    setNumInvites(numInvites + 1);
  };

  return (
    <>
    <form 
      id="invitationForm" 
      method="POST"
      ref={ formRef }
      handleFormSubmit={ (e)=>{ handleFormSubmit(e, `/events/${eventId}/invitations`, formRef) } }
      >
      { parsedInvitationsFormSections }
      <button id='add-invitation-btn' onClick={ increaseInvites }>Add Invitation</button>
      <button type="submit">Send Invite{ parsedInvitationsFormSections.length>1 ? 's' : '' }</button>
    </form>
    </>
  );
}
