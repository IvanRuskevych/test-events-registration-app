// import { useSelector, useDispatch } from "react-redux";
// import { fetchEvents } from "../redux/actions";
import EventCard from "../EventCard/EventCard.jsx";
import events from "../../../events.json";
import { StyledContainer } from "./EventsBoard.styled.js";
const EventsBoard = () => {
  // const dispatch = useDispatch();
  // const events = useSelector((state) => state.events);

  // useEffect(() => {
  //   dispatch(fetchEvents(1, 10, "title", "asc"));
  // }, [dispatch]);

  return (
    <StyledContainer>
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </StyledContainer>
  );
};

export default EventsBoard;
