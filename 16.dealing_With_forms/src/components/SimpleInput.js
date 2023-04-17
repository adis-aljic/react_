// import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const {
    value: enternedName,
    hasError: nameInputHasError,
    isValid: enternedNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailIsTouched, setEnteredEmailIsTouced] = useState(false);
  // console.log(nameInputHasError);
  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  // const emailInputBlurHandler = () => {
  //   setEnteredEmailIsTouced(true);
  // };
  // const emailInputHandler = (e) => {
  //   setEnteredEmail(e.target.value);
  // };

  let formIsValid = false;
  if (enternedNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  console.log(enteredEmailIsValid, enteredEmailIsValid);
  // const [enternedName, setEnteredName] = useState('');
  // const [enternedNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enternedNameTouch, setEnteredNameTouch] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  // posto stanje enterednameisvalid zavisi od enrned name moze se zamjeniti konst
  // const nameInputIsValid = !enternedNameIsValid && enternedNameTouch;

  // const enternedNameIsValid = enternedName.trim() !== '';
  // useEffect(() => {
  // if (enternedNameIsValid) {
  // setFormIsValid(true);
  // } else {
  // setFormIsValid(false);
  // }
  // }, [enternedNameIsValid]);
  // postoji bolja opcija jer ovo nije sideefekt , samo mjenjamo stanje

  // koristeci use state kako pokupiti stanje iz inputa na svaki keystroke
  // state je bolji ako zelimo nakon svakog keystroke vrstiti validaciju i ako zelimo ponisiti unos nakon svakog unosa
  // const nameInputChangeHandler = (e) => {
  // setEnteredName(e.target.value);
  // if (e.target.value.trim() !== '') {
  //   setEnteredNameIsValid(true);
  // }
  // };

  // koristeci useRef kako bi pokupiti vrijednosti iz inputa

  // useEffect(() => {
  //   if (enternedNameIsValid) {
  //     console.log('name input is valid');
  //   }
  // }, [enternedNameIsValid]);

  const formSubmitingHandler = (e) => {
    // console.log(enternedName, '  eeeee');
    e.preventDefault();
    // setEnteredNameTouch(true); svakako se ne moze submitat jer je disabled
    // if (!enternedNameIsValid) {
    //   setEnteredNameIsValid(false);
    // return;
    // }
    console.log('submitano');

    // const enteredValue = nameInputRef.current.value;

    console.log(nameInputHasError, enteredEmail, enternedName);
    // setEnteredName('');
    // setEnteredNameTouch(false);
    resetNameInput();
    resetEmailInput();
    // setEnteredEmail('');
  };

  // const nameInputBlurHandler = (e) => {
  // setEnteredNameTouch(true);
  // if (e.target.value.trim() === '') {
  //   setEnteredNameIsValid(false);
  // }
  // };

  const nameInputClasses = !nameInputHasError
    ? 'form-control'
    : 'form-control invalid';
  const emailInputClasses = !emailInputHasError
    ? 'form-control'
    : 'form-control invalid';
  return (
    <form onSubmit={formSubmitingHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enternedName}
          onBlur={nameBlurHandler}
        />
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must be not empty string.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
        {emailInputHasError && (
          <p className="error-text">Email must contain @.</p>
        )}
      </div>
    </form>
  );
};

export default SimpleInput;
