const handleFormSubmit = (e, path, ref, submissionObj) => {
  const { validate, responseFunction, catchFunction, method, headers, id } = submissionObj;
  e.preventDefault();
  const formData = new FormData(ref.current);
  
  if (id) formData.id=id;
  if (validate) validate(formData, setErrObj);

  if (Object.keys(errObj).length === 0){
    transition('LOADER');
    const reqObj ={
      path: path,
      method: method ? method : e.target.method,
      body: formData,
      headers: headers ? headers : undefined,
    };
    apiRequest(reqObj, responseFunction, catchFunction);
  };
};