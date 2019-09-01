import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import React from 'react';

const burger = (props) => {
  const state = {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:2,
      meat:0
    }
  }
  let transformedIngredients = Object.keys(state.ingredients).map(igKey => {
    return [...Array(state.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey}/>;
    });
  }).reduce((arr,el) =>{
    return arr.concat(el)
  },[]);
  if(transformedIngredients.length===0){
    transformedIngredients=<p>Please start adding ingredients!</p>
  }
  //console.log(this.props.check);
  return (<div className={classes.Burger}>
    <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
    <BurgerIngredient type="bread-bottom"/>
  </div>);
};

export default burger;
