import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Meal.css"; 
const Meal = ({getMeal, meal}) => {
  const  {strMealThumb:thumb,strMeal:name,strInstructions:details,strYoutube:mealLink} = meal; 
   return (
      <div className='meal'>         
         <div style={{padding:"10px"}}>
         <img src={thumb} alt={name} />
            <h4 style={{textAlign:"center", marginTop: "5px"}}>{name}</h4>
            <p>{details.slice(1,50)}<a href={mealLink} title={details} >...read more</a></p>
         </div>
         <button className='addToMenu'  onClick={()=> getMeal(meal)}>add To Menu <FontAwesomeIcon icon={faShoppingCart} spin style={{marginLeft: "5px", fontSize: "18px"}}></FontAwesomeIcon></button>
      </div>
   );
};

export default Meal;