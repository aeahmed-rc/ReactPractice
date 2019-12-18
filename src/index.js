// Getting content to show up on the dom


// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom';
//  React is a variable to store what we imported can be anything like Zebra or whatevr
// react and react-dom coming from the node-modules


// Create a react component
// function based component
// babel will take JSX and turn it into normal JS for browesers
// this is JSX allows us to write function calls in simpler format

// const App= function(){
//   return <div> Hi there!</div>
// }
const App =() =>{
return (
  <div>
  <label htmlFor="name" className="label">
  Enter name:
  </label>
  <input type="text" name="" id="name"/>
<button style={{backgroundColor: 'blue', color:'white'}}>Submit</button>
</div>
);
}

// without JSX
//  must create element then say whats in the element without JSX
//  const App = () =>{
// return React.createElement("div", "Hi there!")
// }
// or  fat arrow syntax
// const App =() =>{
//   return <div> Hi there!</div>
// }



// Take the react component and show it on the screen
ReactDOM.render(
// argument one is what we are rendering
<App />,
// second argument where itll render in the HTML there is a div with id=root
document.querySelector('#root')


);
