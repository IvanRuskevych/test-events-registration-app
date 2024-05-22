import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledEventCard = styled.li`
  background: var(--clr-bg-event-card);
  border: 1px solid var(--clr-border);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledEventTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const StyledEventDescription = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
`;

export const StyledEventDate = styled.p`
  font-size: 0.9em;
  color: var(--clr-text-grey);
  margin-bottom: 10px;
`;

export const StyledEventOrganizer = styled.p`
  font-size: 0.9em;
  color: var(--clr-text-grey);
  margin-bottom: 10px;
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledRegisterLink = styled(Link)`
  background-color: var(--clr-bg-button-register);
  color: var(--clr-text-white);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-bg-button-register-hover);
  }
`;

export const StyledViewLink = styled(Link)`
  background-color: var(--clr-bg-button-view);
  color: var(--clr-text-white);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: var(--clr-bg-button-view-hover);
  }
`;
