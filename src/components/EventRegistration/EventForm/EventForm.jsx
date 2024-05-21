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
  StyledLabel,
} from './EventForm.styled.js';
import FormField from './FormField/FormField.jsx';
import { FIELDS_PATTERN } from '../../../constants/index.js';

const EventForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const { sendData } = useSendData();

  const eventId = useSelector(selectEventId);

  const handleSubmitForm = async data => {
    const newParticipant = { ...data, eventId };
    await sendData('/participants', newParticipant);
    reset();
  };

  return (
    <StyledEventForm onSubmit={handleSubmit(handleSubmitForm)}>
      <FormField
        name={'fullName'}
        title={'Full Name'}
        validation={register('fullName', {
          required: 'Full name is required',
          minLength: {
            value: 2,
            message: 'Має бути від 2 до 35 символів',
          },
          maxLength: {
            value: 35,
            message: 'Має бути від 2 до 35 символів',
          },
        })}
        fieldErrors={errors.fullName}
      />

      <FormField
        name={'email'}
        title={'Email'}
        validation={register('email', {
          required: 'Email is required',
          pattern: {
            value: FIELDS_PATTERN.EMAIL,
            message: 'Не відповідає формату *@*.*',
          },
        })}
        fieldErrors={errors.email}
      />

      <FormField
        type="date"
        name={'dateOfBirth'}
        title={'Date of Birth'}
        validation={register('dateOfBirth', { required: 'Date of birth is required' })}
        fieldErrors={errors.dateOfBirth}
      />

      <StyledLabel>Where did you hear about this event?</StyledLabel>
      <StyledCheckboxWrapper>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
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
        </div>
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
