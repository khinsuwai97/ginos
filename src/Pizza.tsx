import React from "react";

interface Props {
  name: string;
  description: string;
  image?: string;
}

const Pizza = (props: Props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Pizza;
