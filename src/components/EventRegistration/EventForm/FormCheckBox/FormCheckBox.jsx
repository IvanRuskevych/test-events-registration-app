import { useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { StyledLabel, StyledCheckboxWrapper, StyledInput } from './FormCheckBox.styled.js';

const FormCheckBox = ({ fieldErrors, validation, title }) => {
  useEffect(() => {
    if (fieldErrors) {
      toast.error(fieldErrors.message);
    }
  }, [fieldErrors]);

  return (
    <>
      <StyledLabel>{title}</StyledLabel>
      <StyledCheckboxWrapper>
        <StyledInput type="radio" value="Social media" {...validation} />
        Social media
        <StyledInput type="radio" value="Friends" {...validation} />
        Friends
        <StyledInput type="radio" value="Found myself" {...validation} />
        Found myself
      </StyledCheckboxWrapper>
    </>
  );
};

FormCheckBox.propTypes = {
  title: PropTypes.string.isRequired,
  fieldErrors: PropTypes.object,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
};

export default FormCheckBox;
