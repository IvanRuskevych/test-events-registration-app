import styled from 'styled-components';

export const StyledEventForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid var(--clr-border);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  font-weight: bold;
  background-color: var(--clr-bg-button-register);
  color: var(--clr-text-white);
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-bg-button-register-hover);
  }
`;
