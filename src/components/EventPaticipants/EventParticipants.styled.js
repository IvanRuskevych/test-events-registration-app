import styled from 'styled-components';

export const StyledEventParticipants = styled.div`
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  max-width: 800px;
  margin: 0 auto;

  h2 {
    margin-bottom: 16px;
    font-size: 1.5rem;
  }
`;

export const StyledParticipantsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

export const StyledInput = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;
