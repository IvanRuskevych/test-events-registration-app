import { StyledEventRegistrationContainer, StyledTitle } from './EventRegistration.styled.js';
import EventForm from './EventForm/EventForm.jsx';

const EventRegistration = () => {
  return (
    <StyledEventRegistrationContainer>
      <StyledTitle>Event Registration</StyledTitle>
      <EventForm />
    </StyledEventRegistrationContainer>
  );
};

export default EventRegistration;
