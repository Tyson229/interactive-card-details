import "./style.scss";
import { useFormID } from "../../hooks/useFormID";
import { FormEvent, useContext, useState } from "react";
import FormContext from "../../context/FormContext";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import SubmitContext from "../../context/SubmitContext";

const Form = () => {
  const { nameId, numberId, cvcId, monthId, yearId } = useFormID();
  const { formState, handleFormStateChange } = useContext(FormContext);
  const { name, number, month, year, cvc } = formState;

  const [errorState, setErrorState] = useState({
    name: false,
    number: false,
    month: false,
    year: false,
    cvc: false,
  });

  const { setConfirm } = useContext(SubmitContext);

  const numberFormatter = (value: string) => {
    let formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ");

    return formattedValue;
  };

  const handleNumberChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    let formattedValue = numberFormatter(e.target.value);
    handleFormStateChange("number", formattedValue);
  };

  const handleFormSubmitted = (e: FormEvent) => {
    e.preventDefault();

    const numberRegex = /^[0-9]+$/;

    if (name.length <= 0) setErrorState((prev) => ({ ...prev, name: true }));
    else setErrorState((prev) => ({ ...prev, name: false }));

    if (!numberRegex.test(number.replace(/\D/g, "")) || number.length !== 19)
      setErrorState((prev) => ({ ...prev, number: true }));
    else setErrorState((prev) => ({ ...prev, number: false }));

    if (
      !numberRegex.test(month) ||
      month.length !== 2 ||
      +month < 1 ||
      +month > 12
    )
      setErrorState((prev) => ({ ...prev, month: true }));
    else setErrorState((prev) => ({ ...prev, month: false }));

    if (!numberRegex.test(year) || year.length !== 2)
      setErrorState((prev) => ({ ...prev, year: true }));
    else setErrorState((prev) => ({ ...prev, year: false }));

    if (!numberRegex.test(cvc) || cvc.length !== 3)
      setErrorState((prev) => ({ ...prev, cvc: true }));
    else setErrorState((prev) => ({ ...prev, cvc: false }));

    if (Object.values(formState).every((val) => val.length > 0))
      setConfirm(true);
  };

  return (
    <form className="form" onSubmit={handleFormSubmitted}>
      <label className="form--box" htmlFor={nameId}>
        <div className="form--box__label">CARDHOLDER NAME</div>
        <input
          value={name}
          id={nameId}
          onChange={(e) =>
            handleFormStateChange("name", e.target.value.toUpperCase())
          }
          placeholder="e.g. Jane Appleseed"
        />
        {errorState.name && <ErrorMessage message="Can't be plank" />}
      </label>

      <label className="form--box" htmlFor={numberId}>
        <div className="form--box__label">CARD NUMBER</div>
        <input
          value={number}
          id={numberId}
          onChange={handleNumberChanged}
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={19}
        />
        {errorState.number && (
          <ErrorMessage message="Wrong format, numbers only" />
        )}
      </label>

      <div className="row">
        <label className="form--box">
          <div className="form--box__label">EXP. DATE (MM/YY)</div>
          <div className="grid-box">
            <input
              value={month}
              onChange={(e) => handleFormStateChange("month", e.target.value)}
              onBlur={() =>
                handleFormStateChange(
                  "month",
                  month.length == 1 ? `0${month}` : month
                )
              }
              placeholder="MM"
              maxLength={2}
              id={monthId}
            />
            <input
              value={year}
              onChange={(e) => handleFormStateChange("year", e.target.value)}
              onBlur={() =>
                handleFormStateChange(
                  "year",
                  year.length == 1 ? `0${year}` : year
                )
              }
              placeholder="YY"
              maxLength={2}
              id={yearId}
            />
          </div>
          {(errorState.month || errorState.year) && (
            <ErrorMessage message="Can't be blank and must be in right format" />
          )}
        </label>

        <label className="form--box cvc">
          <div className="form--box__label">CVC</div>
          <input
            value={cvc}
            id={cvcId}
            onChange={(e) => handleFormStateChange("cvc", e.target.value)}
            placeholder="e.g. 123"
            maxLength={3}
          />
          {errorState.cvc && <ErrorMessage message="Can't be blank" />}
        </label>
      </div>

      <button className="submit-btn" type="submit">
        Confirm
      </button>
    </form>
  );
};

export default Form;
