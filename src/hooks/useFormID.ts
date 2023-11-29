import { useId } from "react";

export const useFormID = () => {
  const nameId = useId();
  const numberId = useId();
  const cvcId = useId();
  const monthId = useId();
  const yearId = useId();

  return { nameId, numberId, cvcId, monthId,  yearId };
};
