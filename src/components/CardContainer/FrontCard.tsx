import { useContext } from "react";
import FormContext from "../../context/FormContext";

const FrontCard = () => {
  const { formState } = useContext(FormContext);
  const { name, number, month, year } = formState;
  return (
    <div className="front-card">
      <img
        className="card-background"
        src="/images/bg-card-front.png"
        alt="front card background"
      />
      <img
        src="/images/card-logo.svg"
        alt="card-logo"
        className="front-card--logo"
      />
      <div className="front-card--number">
        {number ? number : "0000 0000 0000 0000"}
      </div>
      <div className="front-card--name">{name ? name : "John Doe"}</div>
      <div className="front-card--expiry">
        {month ? month : "00"}/{year ? year : "00"}
      </div>
    </div>
  );
};

export default FrontCard;
