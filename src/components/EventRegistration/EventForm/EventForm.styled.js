import styled from 'styled-components';

export const StyledEventForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledCheckboxWrapper = styled.div`
  padding: 10px;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  font-weight: bold;
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
