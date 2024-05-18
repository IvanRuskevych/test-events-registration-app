import { useSelector } from 'react-redux';

import { selectEvents } from '../../redux/events/selectors.js';
import EventCard from '../EventCard/EventCard.jsx';
import { StyledContainer } from './EventsBoard.styled.js';

const EventsBoard = () => {
  const events = useSelector(selectEvents);
  const isLoading = useSelector(state => state.isLoading);

  return (
    <StyledContainer>
      {isLoading && <p>isLoading</p>}
      {events && events.map(event => <EventCard key={event._id} event={event} />)}
    </StyledContainer>
  );
};

export default EventsBoard;
