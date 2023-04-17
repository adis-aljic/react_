import useInput from '../hooks/use-input';
const isNotEmptyEntry = (value) => value.trim().length > 2;

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    isValid: firstNameIsValid,
    reset: resetFirstName,
  } = useInput(isNotEmptyEntry);

  const {
    value: enteredLastName,
    hasError: enteredLastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    isValid: lastNameIsValid,
    reset: resetLastName,
  } = useInput(isNotEmptyEntry);

  const {
    value: enteredEmail,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    reset: resetEmail,
  } = useInput((enteredEmail) => enteredEmail.includes('@'));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  };
  console.log(enteredFirstNameHasError);
  const classesErrorFirstName = enteredFirstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const classesErrorLastName = enteredLastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const classesErrorEmail = enteredEmailHasError
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classesErrorFirstName}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {enteredFirstNameHasError && (
            <p>First name must have at least three letters</p>
          )}
        </div>

        <div className={classesErrorLastName}>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {enteredLastNameHasError && (
            <p>Last name must have at least three letters</p>
          )}
        </div>
      </div>

      <div className={classesErrorEmail}>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {enteredEmailHasError && <p>Email must contain @</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
