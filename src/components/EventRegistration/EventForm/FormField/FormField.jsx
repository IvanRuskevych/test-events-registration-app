import PropTypes from 'prop-types';
import { StyledFormFieldWrapper, StyledInput, StyledLabel } from './FormField.styled.js';

const FormField = ({ type, fieldErrors, validation, title }) => {
  return (
    <StyledFormFieldWrapper>
      <StyledLabel>{title}</StyledLabel>
      <StyledInput type={type} {...validation} />
      {fieldErrors && <p role="alert">{fieldErrors.message}</p>}
    </StyledFormFieldWrapper>
  );
};

FormField.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  fieldErrors: PropTypes.object,
  // className: PropTypes.string,
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
