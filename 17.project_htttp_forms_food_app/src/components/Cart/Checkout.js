import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveDigits = (value) => value.length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalCodeInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const eneteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostalCode = postalCodeInput.current.value;
    const enteredCity = cityInput.current.value;
    console.log(eneteredName);

    const enteredNameIsValid = !isEmpty(eneteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredAdreesIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveDigits(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredAdreesIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid &&
      enteredAdreesIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: eneteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };
  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsValidity.name ? '' : classes.invalid
        }`}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInput}></input>
        {!formInputsValidity.name && <p>Please input valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.street ? '' : classes.invalid
        }`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput}></input>
        {!formInputsValidity.street && <p>Please input valid street</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.postalCode ? '' : classes.invalid
        }`}>
        <label htmlFor="postal_code">Postal code</label>
        <input type="text" id="postal_code" ref={postalCodeInput}></input>
        {!formInputsValidity.postalCode && <p>Please input valid postalCode</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.city ? '' : classes.invalid
        }`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput}></input>
        {!formInputsValidity.city && <p>Please input valid city</p>}
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
        <button onClick={props.onCancel}>Close</button>
      </div>
    </form>
  );
};

export default Checkout;
