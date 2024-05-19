import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { selectParticipants } from '../../redux/participants/selectors.js';
import ParticipantCard from './ParticipantCard/ParticipantCard.jsx';
import {
  StyledEventParticipants,
  StyledInput,
  StyledParticipantsList,
} from './EventParticipants.styled.js';
import { selectEventId, selectEventTitle } from '../../redux/events/selectors.js';

const EventParticipants = () => {
  // const { eventId } = useParams();
  const eventId = useSelector(selectEventId);
  const participants = useSelector(selectParticipants);
  const eventTitle = useSelector(selectEventTitle);
  const [search, setSearch] = useState('');

  const eventParticipants = participants.filter(el => el.eventId === eventId);
  const filteredParticipants = eventParticipants.filter(
    participant =>
      participant.fullName.toLowerCase().includes(search.toLowerCase()) ||
      participant.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <StyledEventParticipants>
      <h2>{`"${eventTitle}" participants`}</h2>
      <StyledInput
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={handleSearch}
      />
      <StyledParticipantsList>
        {participants &&
          filteredParticipants.map(participant => (
            <ParticipantCard key={participant._id} participant={participant} />
          ))}
      </StyledParticipantsList>
    </StyledEventParticipants>
  );
};

export default EventParticipants;
