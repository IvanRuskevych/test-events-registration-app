import styled from 'styled-components';

export const StyledEventTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid var(--clr-border);
  border-radius: 4px;
  font-size: 16px;
`;
export const StyledContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  justify-items: center;
`;
