import React, { useContext } from "react";
import pre_load from "../../assets/animations/pre-load.gif";
import { NavigateContext } from "../../services/providers/navigateContext";

const PreloadAnimation = () => {
  const { showPreLoad } = useContext(NavigateContext);

  if (showPreLoad) {
    return (
      <div id="preLoadDiv">
        <img id="preLoadImg" src={pre_load} />
      </div>
    );
  }
};

export default PreloadAnimation;
