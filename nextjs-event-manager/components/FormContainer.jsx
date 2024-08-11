'use client'

import useVisualMode from "@/utils/helpers/useVisualMode";
import apiRequest from "@/utils/api/request";

import SpinLoader from "./loader/SpinLoader";

export default function FormContainer({ FormComponent }){
  const {mode, transition}=useVisualMode('FORM');
  const errObj={};

  const handleFormSubmit = (e, path, formRef, submissionObj) => {
    e.preventDefault();
    const { validate, responseFunction, catchFunction, method, headers, id } = submissionObj;
    const formData = new FormData(formRef.current);
    
    if (id) formData.id=id;
    if (validate) validate(formData, setErrObj);

    if (Object.keys(errObj).length === 0){
      transition('LOADER');
      const reqObj = {
        path: path,
        method: method ? method : e.target.method,
        body: formData,
        headers: headers ? headers : undefined,
      };
      apiRequest(reqObj, responseFunction, catchFunction);
    };
  };

  return (
    <div>
      { mode === 'FORM' && <FormComponent handleFormSubmit={ handleFormSubmit } /> }
      { mode === 'LOADER' && <SpinLoader /> }
    </div>
  );
};