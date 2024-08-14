import React, { useState } from "react";

const Toggle = ({ onChangeTheme, switchToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="switch">
      <input
        onChange={onChangeTheme}
        defaultChecked={switchToggle === "light"}
        type="checkbox"
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Toggle;
