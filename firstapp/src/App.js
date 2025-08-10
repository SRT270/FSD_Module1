// // import React, { Component } from 'react'
// // import Greetings from './Components/Greetings'
// // import Introduction from './Components/Introduction'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>Hi I am App.js </h1>
// //         <Greetings/>
// //         <Introduction/>
// //       </div>
// //     )
// //   }
// // }

// import React from 'react'
// import GreetingCardClass from './Components/GreetingCardClass';

// class App extends React.Component {
//   render() {
//     const user1Name = "David";
//     const user1Message = "Learning with class components!";
//     const user2Name = "Eve";
//     const user2Message = "Props work here too!";
//     return (
//       <div>
//          <h1>My React App with Class Components & Props</h1>
//         {/* Using GreetingCardClass and passing variables as props */}
//         <GreetingCardClass name={user1Name} message={user1Message} />
//         <GreetingCardClass name={user2Name} message={user2Message} />
//       </div>
//     );
//   }
// }
// export default App;

//OR


// import React from 'react';
// import GreetingCardFunctional from './Components/GreetingCardFunctional'; // Import the functional component
// class App extends React.Component {
//   render() {
//     const user3Name = "Frank";
//     const user3Message = "Functional components are neat!";
//     return (
//       <div>
//         <h1>My React App with Class Components & Functional Props</h1>

//         {/* Using GreetingCardFunctional and passing variables as props */}
//         <GreetingCardFunctional name={user3Name} message={user3Message} />
//       </div>
//     );
//   }
// }
// export default App;

import React, { useState } from 'react'; 
import GreetingCardFunctional from './Components/GreetingCardFunctional'; 
function App() {
 
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1); 
  }; 
  
  const decrementCount = () => {
    setCount(count - 1); 
  };
  return (
    <div>
      <h1>My React App with Functional Components, Props & State</h1>
      {/* Counter Section */}
      <div>
        <h2>Simple Counter</h2>
        <p>Current Count: {count}</p>
        <div>
          <button onClick={decrementCount}>
            Decrement
          </button>
          <button onClick={incrementCount}>
            Increment
          </button>
        </div>
      </div>
      {/* Greeting Cards Section using functional component */}
      <div>
        <GreetingCardFunctional name="Alice" message="Welcome to React!" />
        <GreetingCardFunctional name="Bob" message="Hope you enjoy learning!" />
        <GreetingCardFunctional name="Charlie" message="Let's build something great!" />
      </div>
    </div>
  );
}
export default App;




