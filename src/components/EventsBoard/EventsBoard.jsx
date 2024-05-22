import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { selectEvents, selectPage, selectTotal } from '../../redux/events/selectors.js';
import { getAllEventsThunk } from '../../redux/events/operations.js';
import { formatEventDate } from '../../utils';

import EventCard from './EventCard/EventCard.jsx';
import { StyledContainer, StyledEventTitle, StyledInput } from './EventsBoard.styled.js';

const EventsBoard = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const page = useSelector(selectPage);
  const events = useSelector(selectEvents);
  const total = useSelector(selectTotal);

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

  const fetchMoreData = () => {
    if (events.length >= total) {
      return setHasMore(false);
    }
    dispatch(getAllEventsThunk({ page }));
  };

  return (
    <>
      <StyledEventTitle>{`Events`}</StyledEventTitle>
      <StyledInput type="text" placeholder="Search ..." value={search} onChange={handleSearch} />
      <InfiniteScroll
        dataLength={events.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <StyledContainer>
          {events && filteredEvents.map(event => <EventCard key={event._id} event={event} />)}
        </StyledContainer>
      </InfiniteScroll>
    </>
  );
};

export default EventsBoard;
