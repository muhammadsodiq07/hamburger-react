import React from 'react';
import "./Burger.css";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients).map(inKey => {
    return [...Array(props.ingredients[inKey])].map((_, i) => {
      return <BurgerIngredient key={inKey + i} type={inKey} />
    });
  }).reduce((arr, el) => {
    return arr.concat(el); 
  })

  if(transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding ingredients</p>
  }

  return (
    <div className='Burger'>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger
