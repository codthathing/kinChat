import { useContext } from "react";
import { NavigateContext } from "../sections/navigateContext";

export const showPreload = () => {
  const { setShowPreLoad } = useContext(NavigateContext);

  setShowPreLoad(true);
  setTimeout(() => {
    setShowPreLoad(false);
  }, 2000);
};
