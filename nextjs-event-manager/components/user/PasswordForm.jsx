'use client'

import { useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function PasswordForm({ handleFormSubmit }){
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const user = searchParams.get('user');
  const formRef = useRef();

  const sbmObj = {
    responseFunction: undefined,
    catchFunction: undefined,
  };
  
  return (
    <form
      method='POST'
      ref={ formRef }
      onSubmit={(e)=>{ handleFormSubmit(e, `user/reset_password/${token}/${user}/`, formRef, sbmObj) }}
    >
      <div>
        <label>New Password:</label>
        <input type="password" name="password"  />
      </div>
      <div>
        <label>Confirm New Password:</label>
        <input type="password" name="confirm_password" />
      </div>
      
      <button type="submit" >Submit</button>
    </form>
  );
};