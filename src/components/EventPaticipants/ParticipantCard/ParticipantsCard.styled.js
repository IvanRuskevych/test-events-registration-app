import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--clr-box-shadow);
  width: 200px;
`;

export const StyledParticipantName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

export const StyledParticipantEmail = styled.p`
  font-size: 0.7rem;
  color: var(--clr-text-grey);
`;
