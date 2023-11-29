import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.addEventListener("resize", () =>
      setWindowWidth(window.innerWidth)
    );

    return () => {
      document.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, [windowWidth]);

  return windowWidth;
};

export default useWindowWidth;
