import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal'
import { addToDb, getSaveCart } from '../Utilities/Utilities';
import "./Meals.css"
const Meals = () => {
   const [meals, setMeals] = useState([]); 
   const [cart , setCart] = useState([]);
   useEffect(()=>{
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
      .then(res => res.json())
      .then(data =>setMeals(data.meals));
   }, []); 
   useEffect(()=>{
      const storedCart = getSaveCart();
      console.log(storedCart);
      const saveCart = []; 
      for(const id in storedCart){
           const  addMeal  = meals.find(meal => meal.idMeal === id);
           if(addMeal){
            const quantity = storedCart[id];
            addMeal.quantity = quantity; 
            saveCart.push(addMeal);
           }
      }
      setCart(saveCart);
   },[meals]);
   const getMeal = (selectedMeal) => {
      let newCartMeal; 
         const exits = cart.find(meal => meal.idMeal === selectedMeal.idMeal);
         
         if(!exits){
            selectedMeal.quantity = 1; 
            newCartMeal = [...cart ,selectedMeal];
         }else{
            exits.quantity = exits.quantity + 1; 
            const rest = cart.filter(meal => meal.idMeal !== exits.idMeal);
            newCartMeal= [...rest, exits];
         }
         // console.log(exits); 
      setCart(newCartMeal); 
      // console.log(cart)
      addToDb(selectedMeal.idMeal);       
   }
   return (
      <div className='shop-container'>
         <div className="meals-container">
            {
               meals.map(meal => <Meal meal={meal} key={meal.idMeal} getMeal={getMeal}></Meal>)
            }
         </div>
         <div className="cartContainer">
            <Cart cart={cart} ></Cart>
         </div>
      </div>
   );
};

export default Meals;