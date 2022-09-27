import React from 'react';
import './Cart.css'; 
const Cart = ({cart}) => {
   let quantity = 0;
   for(const meal of cart){
      quantity = quantity + meal.quantity;
   }
   return (
      <div className='cart'>
         <h2 class='hi-light'>Order summary:  </h2>  
         {
            cart.map(meal => <p key={meal.idMeal}>{meal.strMeal} : {meal.quantity}</p>)
         }       
         <h4 className='hi-light'>Total Meals: {quantity}</h4>
      </div>
   );
};

export default Cart;