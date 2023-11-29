import { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";
import FormContext from "./context/FormContext";
import SubmitContext from "./context/SubmitContext";
import { useFormStates } from "./hooks/useFormStates";
import ConfirmPage from "./components/ConfirmPage/ConfirmPage";

function App() {
  const { formState, handleFormStateChange } = useFormStates({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [confirm, setConfirm] = useState(false);
  return (
    <Container>
      <FormContext.Provider value={{ formState, handleFormStateChange }}>
        <CardContainer />
        <SubmitContext.Provider value={{ confirm, setConfirm }}>
          {confirm ? <ConfirmPage /> : <Form />}
        </SubmitContext.Provider>
      </FormContext.Provider>
    </Container>
  );
}

export default App;
