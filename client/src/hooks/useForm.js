import { useState } from 'react';

export const useForm = (initialValue, submitCb) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    e.persist();
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCb();
    setValues(initialValue);
  };

  return [values, handleChange, handleSubmit];
};
