import React from "react";

function Skill({ img, text }) {
  return (
    <>
      <img src={img} alt={img} />
      <h5>{text}</h5>
    </>
  );
}

export default Skill;
