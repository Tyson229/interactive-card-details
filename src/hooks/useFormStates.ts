import { useState } from "react";

export interface FormStateInterface {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
}

export const useFormStates = (defaultValue: FormStateInterface) => {
  const [formState, setFormState] = useState(defaultValue);

  const handleFormStateChange = (key: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    formState,
    handleFormStateChange,
  };
};
