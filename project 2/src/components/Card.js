const title ="Calling me";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

// Create Componant
function Card(){
  return <div className='card'>
      <h3 className='cardTitle'>{title}</h3>
      <p className='cardDes'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, at!</p>
      <p className='cardFooter'>{dateName + " " + monthName + " " + yearName}</p>
    </div>
}

// compoonent export korte hbe jate sobai use korte pare
export default Card