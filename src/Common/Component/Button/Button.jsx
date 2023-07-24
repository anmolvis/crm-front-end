import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  variant = "contained",
  buttonText,
  clickHandler,
  startIcon,
  endIcon,
}) => {
  return (
    <div className="custom-button">
      <Button
        variant={variant}
        onClick={clickHandler}
        size="medium"
        {...(startIcon ? { startIcon: startIcon } : {})}
        {...(endIcon ? { endIcon: endIcon } : {})}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default CustomButton;
