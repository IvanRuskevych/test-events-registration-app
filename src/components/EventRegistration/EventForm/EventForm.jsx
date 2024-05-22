import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useSendData } from '../../../hooks/axiosAPI.js';
import { selectEventId } from '../../../redux/events/selectors.js';
import { FIELDS_PATTERN } from '../../../constants';

import FormField from './FormField/FormField.jsx';
import FormCheckBox from './FormCheckBox/FormCheckBox.jsx';
import { StyledButton, StyledEventForm } from './EventForm.styled.js';
import { toast } from 'react-toastify';

const EventForm = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isValid, isLoading },
  } = useForm();
  const { sendData } = useSendData();

  const eventId = useSelector(selectEventId);

  const handleSubmitForm = async data => {
    const newParticipant = { ...data, eventId };
    await sendData('/participants', newParticipant);
    if (isLoading) {
      toast.info('Please wait ...');
    }
    if (isValid) {
      toast.success('You have successfully registered for this event.');
    }
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

      <FormCheckBox
        name={'heardAbout'}
        title={'Where did you hear about this event?'}
        validation={register('heardAbout', {
          required: 'Please answer the question: "Where did you hear about this event?"',
        })}
        fieldErrors={errors.heardAbout}
      />

      <StyledButton type="submit">Register</StyledButton>
    </StyledEventForm>
  );
};

export default EventForm;
