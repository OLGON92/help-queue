import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewTicketForm(props) {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;

/*First, we will create a method called onNewTicketCreation in the parent TicketControl component.
Next, we'll pass the onNewTicketCreation function to its child NewTicketForm component as a prop.
Our child NewTicketForm component has a function called handleNewTicketFormSubmission which correctly gathers user inputs from a form. We will add onNewTicketCreation to the handleNewTicketFormSubmission as a callback.
Form data will be passed into the onNewTicketCreation callback via its parameters.
The parent TicketControl component will have access to that data, which it can then use to add a new ticket to our mainTicketList.*/