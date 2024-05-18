import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
`;

export const StyledParticipantName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #333;
`;

export const StyledParticipantEmail = styled.p`
  font-size: 1rem;
  color: #666;
`;
