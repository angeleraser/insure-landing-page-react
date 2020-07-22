import React, { useState } from "react";
const MenuButton = ({displayMenu}) => {
  const [isClosed, setClassName] = useState(true);
  return (
    <button
      onClick={() => {
        displayMenu(!isClosed)
        setClassName(!isClosed);
      }}
      className={isClosed ? "open" : "close"}></button>
  );
};

export default MenuButton;
