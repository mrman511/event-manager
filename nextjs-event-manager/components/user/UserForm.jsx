export default function UserForm(){

  return (
    <form action="/create_user" method="post">
      <label for="first_name">First Name</label>
      <input type="text" id="first_name" name="first_name" required />
      
      <label for="last_name">Last Name</label>
      <input type="text" id="last_name" name="last_name" required />
      
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
      
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />
      
      <label for="phone_number">Phone Number (optional)</label>
      <input type="tel" id="phone_number" name="phone_number" />
      
      <button type="submit">Create User</button>
  </form>
  )
}