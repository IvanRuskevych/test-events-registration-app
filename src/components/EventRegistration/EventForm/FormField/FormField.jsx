import PropTypes from 'prop-types';
import { StyledFormFieldWrapper, StyledInput, StyledLabel } from './FormField.styled.js';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const FormField = ({ type, title, fieldErrors, validation }) => {
  useEffect(() => {
    if (fieldErrors) {
      toast.error(fieldErrors.message);
    }
  }, [fieldErrors]);

  return (
    <>
      <StyledFormFieldWrapper>
        <StyledLabel>{title}</StyledLabel>
        <StyledInput type={type} {...validation} />
      </StyledFormFieldWrapper>
    </>
  );
};

FormField.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  fieldErrors: PropTypes.object,
  validation: PropTypes.shape({
    required: PropTypes.string,
    minLength: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    maxLength: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
  }).isRequired,
};

export default FormField;
