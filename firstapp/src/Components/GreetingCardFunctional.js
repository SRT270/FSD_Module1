import React from 'react';
const GreetingCardFunctional = (props) => {
  return (
    <div>
      {/* We access the 'name' property directly from the props argument */}
      <h2>Hello from Functional Component, {props.name}!</h2>
      {/* We access the 'message' property directly from the props argument */}
      <p>{props.message}</p>
    </div>
  );
};
export default GreetingCardFunctional;