import { SetStateAction, createContext } from "react";

interface submitInterface {
  confirm: boolean;
  setConfirm: React.Dispatch<SetStateAction<boolean>>;
}

const SubmitContext = createContext<submitInterface>({
  confirm: false,
  setConfirm: () => {},
});

export default SubmitContext;
