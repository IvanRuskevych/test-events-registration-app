import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectEvents } from '../../redux/events/selectors.js';
import { formatEventDate } from '../../utils';

import EventCard from '../EventCard/EventCard.jsx';
import { StyledContainer, StyledInput } from './EventsBoard.styled.js';

const EventsBoard = () => {
  const events = useSelector(selectEvents);
  const isLoading = useSelector(state => state.isLoading);
  const [search, setSearch] = useState('');

  const filteredEvents = events.filter(event => {
    const formatedEventDate = formatEventDate(event.eventDate);
    return (
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      formatedEventDate.includes(search) ||
      event.organizer.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <>
      <h2>{`Events`}</h2>
      <StyledInput type="text" placeholder="Search ..." value={search} onChange={handleSearch} />
      <StyledContainer>
        {isLoading && <p>isLoading</p>}
        {events && filteredEvents.map(event => <EventCard key={event._id} event={event} />)}
      </StyledContainer>
    </>
  );
};

export default EventsBoard;
