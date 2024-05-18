import EventForm from './EventForm/EventForm.jsx';
import { StyledEventRegistrationContainer, StyledTitle } from './EventRegistration.styled.js';

const EventRegistration = () => {
  return (
    <StyledEventRegistrationContainer>
      <StyledTitle>Event Registration</StyledTitle>
      <EventForm />
    </StyledEventRegistrationContainer>
  );
};

export default EventRegistration;
