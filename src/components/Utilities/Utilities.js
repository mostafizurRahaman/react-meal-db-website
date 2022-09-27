const addToDb = (idMeal) =>{
   const shoppingCart = getSaveCart();
   let quantity; 
   if(shoppingCart[idMeal]){
      quantity = shoppingCart[idMeal] + 1; 
      shoppingCart[idMeal] = quantity ;
   }else{
      shoppingCart[idMeal] = 1; 
   }
   localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

const getSaveCart = () =>{
   let shoppingCart ; 
   const storedMeal = localStorage.getItem('shoppingCart'); 
   if(storedMeal){
      shoppingCart = JSON.parse(storedMeal);
   }else{
      shoppingCart = {};
   }
   return shoppingCart; 
}

const toAvoidInspect = () => {
   document.body.addEventListener('contextmenu', function(e){
      e.preventDefault();
   })
}
export {
   addToDb, 
   getSaveCart,
   toAvoidInspect,
}