import { useContext } from "react";
import "./style.scss";
import SubmitContext from "../../context/SubmitContext";
import FormContext from "../../context/FormContext";

const ConfirmPage = () => {
  const { setConfirm } = useContext(SubmitContext);
  const { handleFormStateChange } = useContext(FormContext);

  const handleButtonClicked = () => {
    handleFormStateChange('name', '');
    handleFormStateChange('number', '');
    handleFormStateChange('month', '');
    handleFormStateChange('year', '');
    handleFormStateChange('cvc', '');
    setConfirm(false);
  };
  
  return (
    <div className="confirm">
      <img src="/images/icon-complete.svg" />
      <h2>Thank you!</h2>
      <h5>We've added your card details</h5>
      <button onClick={handleButtonClicked} className="submit-btn">
        Continue
      </button>
    </div>
  );
};

export default ConfirmPage;
