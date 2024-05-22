import PropTypes from 'prop-types';
import {
  StyledItem,
  StyledParticipantEmail,
  StyledParticipantName,
} from './ParticipantsCard.styled.js';

const ParticipantCard = ({ participant }) => {
  return (
    <StyledItem>
      <StyledParticipantName>{participant.fullName}</StyledParticipantName>
      <StyledParticipantEmail>{participant.email}</StyledParticipantEmail>
    </StyledItem>
  );
};

ParticipantCard.propTypes = {
  participant: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default ParticipantCard;
