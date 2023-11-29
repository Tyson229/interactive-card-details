import { createContext } from "react";
import { FormStateInterface } from "../hooks/useFormStates";

interface FormContextInterface {
  formState: FormStateInterface;
  handleFormStateChange: (key: string, value: string) => void;
}

const FormContext = createContext<FormContextInterface>({
  formState: {
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  },
  handleFormStateChange: () => {},
});

export default FormContext;
