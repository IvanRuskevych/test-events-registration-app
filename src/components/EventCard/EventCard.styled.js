import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledEventCard = styled.li`
  background: #fff;
  border: 1px solid #ddd;
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
  color: #555;
  margin-bottom: 10px;
`;

export const StyledEventOrganizer = styled.p`
  font-size: 0.9em;
  color: #555;
  margin-bottom: 10px;
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledRegisterLink = styled(Link)`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledViewLink = styled(Link)`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;
