import PropTypes from "prop-types";
import {
  StyledEventCard,
  StyledEventDate,
  StyledEventDescription,
  StyledEventOrganizer,
  StyledEventTitle,
  StyledLinkContainer,
  StyledRegisterLink,
  StyledViewLink,
} from "./EventCard.styled.js";

const EventCard = ({ event }) => {
  const { title, description, eventDate, organizer, _id } = event;

  return (
    <StyledEventCard className="event-card">
      <StyledEventTitle>{title}</StyledEventTitle>
      <StyledEventDescription>{description}</StyledEventDescription>

      <StyledEventDate>
        {new Date(eventDate).toLocaleDateString()}
      </StyledEventDate>
      <StyledEventOrganizer>{organizer}</StyledEventOrganizer>

      <StyledLinkContainer>
        <StyledRegisterLink to={`/register`}>Register</StyledRegisterLink>
        <StyledViewLink to={`/participants/${_id}`}>View</StyledViewLink>
      </StyledLinkContainer>
    </StyledEventCard>
  );
};

EventCard.propTypes = {
  event: PropTypes.any,
};

export default EventCard;
