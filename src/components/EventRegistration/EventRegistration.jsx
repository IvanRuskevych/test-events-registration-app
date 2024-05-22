import EventForm from './EventForm/EventForm.jsx';
import { StyledEventRegistrationContainer, StyledTitle } from './EventRegistration.styled.js';
import { useSelector } from 'react-redux';
import { selectEventTitle } from '../../redux/events/selectors.js';

const EventRegistration = () => {
  const eventTitle = useSelector(selectEventTitle);
  return (
    <StyledEventRegistrationContainer>
      <StyledTitle>Event Registration</StyledTitle>
      <StyledTitle>{`"${eventTitle}"`}</StyledTitle>
      <EventForm />
    </StyledEventRegistrationContainer>
  );
};

export default EventRegistration;
