import PropTypes from 'prop-types';
import {
  StyledItem,
  StyledParticipantEmail,
  StyledParticipantName,
} from './ParticipantsCard.styled.js';

const ParticipantCard = ({ participant }) => {
  return (
    <StyledItem className="participant-card">
      <StyledParticipantName>{participant.fullName}</StyledParticipantName>
      <StyledParticipantEmail>{participant.email}</StyledParticipantEmail>
    </StyledItem>
  );
};

ParticipantCard.propTypes = {
  // participant: PropTypes.shape({})
  participant: PropTypes.any,
};

export default ParticipantCard;
