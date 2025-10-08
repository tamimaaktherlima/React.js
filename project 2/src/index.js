import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



createRoot(document.getElementById('root')).render(
  <div>
    <App />
  </div>

)


// import React from 'react';
// import ReactDOM, {createRoot} from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const title ="Calling me";
// const date = new Date();
// const dateName = date.getDate();
// const monthName = date.getMonth();
// const yearName = date.getFullYear();

// // Create Componant
// function Card(){
//   return <div className='card'>
//       <h3 className='cardTitle'>{title}</h3>
//       <p className='cardDes'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, at!</p>
//       <p className='cardFooter'>{dateName + " " + monthName + " " + yearName}</p>
//     </div>
// }

// createRoot(document.getElementById('root')).render(
//   <div>
//     <h1 className='headingStyle'>Hello React!</h1>

// {/* Useing COmponant */}
//     <Card />
//     <Card />
//     <Card />
    

     
//   </div>

// )
