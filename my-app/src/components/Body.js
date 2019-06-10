import React from "react";

const Body = props => (
  <div>
    <p>{props.text}</p> <p>{props.myFunc(1, 3)}</p> <p>{props.text}</p>{" "}
  </div>
);

export default Body;
