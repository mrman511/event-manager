'use client'

import useVisualMode from "@/utils/helpers/useVisualMode";
import SpinLoader from "@/components/loader/SpinLoader";
import dynamic from "next/dynamic";

export default function FormContainer({ formPath, formData }){
  const {mode, transition}=useVisualMode('FORM');
  const errObj={};
  const FormComponent = dynamic(() => import('../' + formPath), {
    ssr: false,
  });


  async function submitForm(e, path, responseFunc){
    e.preventDefault();
    transition('LOADER');
    try {
      const formData = new FormData(e.target)
      let response = await fetch(path, {
        method: e.target.method.toUpperCase(),
        body: formData,
        cache: 'no-store'
      });
      response=await response.json()
      if (responseFunc) responseFunc(response)
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div>
      { mode === 'FORM' && <FormComponent submitForm={ submitForm } formData={ formData } /> }
      { mode === 'LOADER' && <SpinLoader /> }
    </div>
  );
};