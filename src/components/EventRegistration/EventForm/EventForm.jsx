import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { useSendData } from '../../../hooks/axiosAPI.js';
import { selectEventId } from '../../../redux/events/selectors.js';

import {
  StyledButton,
  StyledCheckboxWrapper,
  StyledEventForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
} from './EventForm.styled.js';

const EventForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { sendData } = useSendData();

  const eventId = useSelector(selectEventId);

  const handleSubmitForm = async data => {
    const newParticipant = { ...data, eventId };
    await sendData('/participants', newParticipant);
    reset();
  };

  return (
    <StyledEventForm onSubmit={handleSubmit(handleSubmitForm)}>
      <StyledInputWrapper>
        <StyledLabel>Full Name</StyledLabel>
        <StyledInput {...register('fullName', { required: 'Full name is required' })} />
      </StyledInputWrapper>
      {errors.fullName && <p>{errors.fullName.message}</p>}

      <StyledInputWrapper>
        <StyledLabel>Email</StyledLabel>
        <StyledInput type="email" {...register('email', { required: 'Email is required' })} />
      </StyledInputWrapper>
      {errors.email && <p>{errors.email.message}</p>}

      <StyledInputWrapper>
        <StyledLabel>Date of Birth</StyledLabel>
        <StyledInput
          type="date"
          {...register('dateOfBirth', { required: 'Date of birth is required' })}
        />
      </StyledInputWrapper>
      {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}

      <StyledLabel>Where did you hear about this event?</StyledLabel>
      <StyledCheckboxWrapper>
        <StyledInput
          type="radio"
          value="Social media"
          {...register('heardAbout', { required: 'This field is required' })}
        />
        Social media
        <StyledInput
          type="radio"
          value="Friends"
          {...register('heardAbout', { required: 'This field is required' })}
        />
        Friends
        <StyledInput
          type="radio"
          value="Found myself"
          {...register('heardAbout', { required: 'This field is required' })}
        />
        Found myself
      </StyledCheckboxWrapper>
      {errors.heardAbout && <p>{errors.heardAbout.message}</p>}

      <StyledButton type="submit">Register</StyledButton>
    </StyledEventForm>
  );
};

EventForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default EventForm;
