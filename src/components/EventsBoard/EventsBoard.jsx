import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectEvents, selectTotal } from '../../redux/events/selectors.js';
import { formatEventDate } from '../../utils';

import EventCard from '../EventCard/EventCard.jsx';
import { StyledContainer, StyledInput } from './EventsBoard.styled.js';
import { getAllEventsThunk } from '../../redux/events/operations.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from 'react-router-dom';

const EventsBoard = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  console.log('page', page);

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
      setHasMore(false);
      return;
    }
    dispatch(getAllEventsThunk({ page, limit: 10 }));
    setPage(prevPage => prevPage + 1);
    console.log('prevPage=>page', page);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      dispatch(getAllEventsThunk({ page: 1, limit: 10 }));
    }
  }, [dispatch, pathname]);

  return (
    <>
      <h2>{`Events`}</h2>
      <StyledInput type="text" placeholder="Search ..." value={search} onChange={handleSearch} />
      <InfiniteScroll
        dataLength={events.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <StyledContainer>
          {/*{isLoading && <p>isLoading</p>}*/}
          {events && filteredEvents.map(event => <EventCard key={event._id} event={event} />)}
        </StyledContainer>
      </InfiniteScroll>
    </>
  );
};

export default EventsBoard;
