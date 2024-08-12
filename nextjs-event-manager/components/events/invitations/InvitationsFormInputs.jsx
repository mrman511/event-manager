export default function InvitationFormInputs(){

  return (
    <div>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name" name="first_name" required />
      </div>

      <div>
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" name="last_name" required />
      </div>

      <div>
        <label htmlFor="invite">Invite Email</label>
        <input type="email" id="invite" name="invite" required />
      </div>

      <div>
        <label htmlFor="allow_invites" method="post">Allow Invites</label>
        <input type="checkbox" id="allow_invites" name="allow_invites" />
      </div>

      <div>
        <label htmlFor="max_guests">Max Guests</label>
        <input type="number" id="max_guests" name="max_guests" required />
      </div>
    </div>
  );
}