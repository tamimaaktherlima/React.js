// for Everytime run the code:
// cd (folder name) -> npm start


import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
// import './index.css'; // imported from src folder
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Welcome</h1>
//     <p>Hi, I'm Tamima Akther Lima welcome to my first react app.</p>
//   </React.StrictMode>
// );

// Render at a time 1 ta element k render korte pare tai div niye tarmoddhe joto iccha element show korano jabe

const title ="Calling me";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

// In-line Css
const headingStyle ={
  // color:"red", 
  // fontSize:"3rem"
  backgroundColor: "purple",
  color: "white",
  textAlign: "center",
  padding: "15px"
}
createRoot(document.getElementById('root')).render(
  <div>
    {/* <h1>Hello React!</h1> */}


{/* Public folder */}
    {/* In-line CSS */}
    {/* <h1 style={{color:"red", fontSize:"3rem"}}>Hello React!</h1> */}
    {/* <h1 style={headingStyle}>In-Line CSS - Hello React!</h1> */}

    {/* External CSS */}
    <h1 className='headingStyle'>External CSS - Hello React!</h1>

    {/* Exrenal CSS with multiple class */}
    {/* <h1 className='headingStyle largeText'>External CSS with Multiple style - Hello React!</h1> */}


{/* if we create css file in SRC folder we have to import this file */}
    {/* <h2 className='headingStyle'>Todo App</h2> */}

    <div className='card'>
      {/* JS variable used in HTML */}
      <h3 className='cardTitle'>{title}</h3>
      <p className='cardDes'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, at!</p>
      {/* <p>{new Date().getFullYear()}</p> */}
      <p className='cardFooter'>{dateName + " " + monthName + " " + yearName}</p>
    </div>
  </div>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
