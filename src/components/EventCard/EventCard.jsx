import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setEventId, setEventTitle } from '../../redux/events/slice.js';

import {
  StyledEventCard,
  StyledEventDate,
  StyledEventDescription,
  StyledEventOrganizer,
  StyledEventTitle,
  StyledLinkContainer,
  StyledRegisterLink,
  StyledViewLink,
} from './EventCard.styled.js';

const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const { title, description, eventDate, organizer, _id } = event;
  const formatedEventDate = new Date(eventDate).toLocaleDateString();

  const handleRegisterLinkClick = () => {
    dispatch(setEventId(_id));
  };

  const handleViewLinkClick = () => {
    dispatch(setEventTitle(title));
  };

  return (
    <StyledEventCard className="event-card">
      <StyledEventTitle>{title}</StyledEventTitle>
      <StyledEventDescription>{description}</StyledEventDescription>
      <StyledEventDate>{formatedEventDate}</StyledEventDate>
      <StyledEventOrganizer>{organizer}</StyledEventOrganizer>

      <StyledLinkContainer>
        <StyledRegisterLink to={`/register`} onClick={handleRegisterLinkClick}>
          Register
        </StyledRegisterLink>
        <StyledViewLink to={`/participants/${_id}`} onClick={handleViewLinkClick}>
          View
        </StyledViewLink>
      </StyledLinkContainer>
    </StyledEventCard>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    organizer: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
