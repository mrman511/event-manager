'use client'

export default function EventForm({ submitForm, formData }){


  return(
    <form  
      method="POST" 
      onSubmit={ (e) => submitForm(e, '/api/events') }
      >
      <label htmlFor="title">Title:</label>
      <input id="title" name="title" type="text" />

      <label htmlFor="address">Address:</label>
      <input id="address" name="address" type="text" />

      <label htmlFor="start">Start:</label>
      <input id="start" name="start" type="datetime-local" />

      <label htmlFor="end">End:</label>
      <input id="end" name="end" type="datetime-local" />

      <label htmlFor="tag_line">Tag Line:</label>
      <input id="tag_line" name="tag_line" type="text" />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description"></textarea>

      <label htmlFor="postscript">Postscript:</label>
      <input id="postscript" name="postscript" type="text" />
{/* 
      <label htmlFor="invitation">Invitation Image:</label>
      <input id="invitation" name="invitation" type="file" accept="image/*" /> */}

      <input type="submit" value="Submit" />
    </form>
  );
}