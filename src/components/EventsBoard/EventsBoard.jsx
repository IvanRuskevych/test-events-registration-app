import { useSelector } from "react-redux";
import EventCard from "../EventCard/EventCard.jsx";
import { StyledContainer } from "./EventsBoard.styled.js";
import { eventsSelectors } from "../../redux/events/selectors.js";

const EventsBoard = () => {
  const events = useSelector(eventsSelectors);
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <StyledContainer>
      {isLoading && <p>isLoading</p>}
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </StyledContainer>
  );
};

export default EventsBoard;
