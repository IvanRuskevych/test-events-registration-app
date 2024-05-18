import PropTypes from 'prop-types';
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
import { useDispatch } from 'react-redux';
import { setEventId } from '../../redux/events/slice.js';

const EventCard = ({ event }) => {
  const { title, description, eventDate, organizer, _id } = event;
  const dispatch = useDispatch();
  const handleLinkClick = () => {
    dispatch(setEventId(_id));
  };

  return (
    <StyledEventCard className="event-card">
      <StyledEventTitle>{title}</StyledEventTitle>
      <StyledEventDescription>{description}</StyledEventDescription>

      <StyledEventDate>{new Date(eventDate).toLocaleDateString()}</StyledEventDate>
      <StyledEventOrganizer>{organizer}</StyledEventOrganizer>

      <StyledLinkContainer>
        <StyledRegisterLink to={`/register`} onClick={handleLinkClick}>
          Register
        </StyledRegisterLink>
        <StyledViewLink to={`/participants/${_id}`}>View</StyledViewLink>
      </StyledLinkContainer>
    </StyledEventCard>
  );
};

EventCard.propTypes = {
  event: PropTypes.any,
};

export default EventCard;
