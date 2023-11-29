import { useContext } from "react";
import FormContext from "../../context/FormContext";

const BackCard = () => {
  const { formState } = useContext(FormContext);
  const { cvc } = formState;

  return (
    <div className="back-card">
      <img src="/images/bg-card-back.png" className="card-background" alt="Back Card Background" />
      <div className="back-card--cvc">{cvc ? cvc : "000"}</div>
    </div>
  );
};

export default BackCard;
