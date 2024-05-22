import styled from 'styled-components';

export const StyledEventParticipants = styled.div`
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--clr-box-shadow);
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    margin-bottom: 16px;
    font-size: 1.5rem;
  }
`;

export const StyledParticipantsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 10px;
  justify-items: center;
`;

export const StyledInput = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid var(--clr-border);
  border-radius: 4px;
  font-size: 16px;
`;
