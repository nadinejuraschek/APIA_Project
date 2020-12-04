// REACT
import React from 'react';
import { useHistory } from 'react-router-dom';

// DEPENDENCIES
import { useForm } from 'react-hook-form';

const Step1 = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = data => {
    history.push('/step2');
  };

  return (
    <form>
      <label></label>
      <input name='firstname' type='text' placeholder='First Name' />
    </form>
  );
};

export default Step1;