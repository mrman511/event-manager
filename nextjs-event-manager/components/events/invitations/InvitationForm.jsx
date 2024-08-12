'use client'

import { useState } from "react";
import InvitationFormInputs from "./InvitationsFormInputs";

export default function InvitaionForm({ submitForm, formData }){
  const [ numInvites, setNumInvites ] = useState(1);

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
      onSubmit={ (e)=>submitForm(e, formData.path) }
      >
      { parsedInvitationsFormSections }
      <button id='add-invitation-btn' onClick={ increaseInvites }>Add Invitation</button>
      <button type="submit">Send Invite{ parsedInvitationsFormSections.length>1 ? 's' : '' }</button>
    </form>
    </>
  );
}
