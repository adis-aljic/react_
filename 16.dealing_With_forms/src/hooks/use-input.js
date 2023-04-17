import { useState } from 'react';
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouch, setIsTouch] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouch;
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouch(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouch(false);
  };

  console.log(enteredValue);

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    reset,
  };
};

export default useInput;
