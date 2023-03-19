import React from "react";

function NewTicketForm() {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input 
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

export default NewTicketForm;

/*First, we will create a method called onNewTicketCreation in the parent TicketControl component.
Next, we'll pass the onNewTicketCreation function to its child NewTicketForm component as a prop.
Our child NewTicketForm component has a function called handleNewTicketFormSubmission which correctly gathers user inputs from a form. We will add onNewTicketCreation to the handleNewTicketFormSubmission as a callback.
Form data will be passed into the onNewTicketCreation callback via its parameters.
The parent TicketControl component will have access to that data, which it can then use to add a new ticket to our mainTicketList.*/