import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux';
import React, {Component} from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES={
  salad: 1,
  bacon: 1,
  cheese: 0.5,
  meat: 3,
}
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 0,
        cheese: 2,
        meat: 2
      },
        totalPrice: 0,
    };
  };

  addIngredientHandler = (type)=>{
    const oldCount = this.state.ingredients[type];
    const updatedCount=oldCount+1;
    const updatedIngredients={
      ...this.state.ingredients
    };
    updatedIngredients[type]=updatedCount;
    const priceAddition=INGREDIENT_PRICES[type];
    const newPrice=this.state.totalPrice+priceAddition;
    this.setState(
      {
        totalPrice:newPrice,
        ingredients:updatedIngredients,
      }
    )
  }

  render() {
    return (<Aux>
      <Burger ingredients={this.state.ingredients}/>
      <BuildControls ingredientAdded={this.addIngredientHandler}/>
    </Aux>);
  }
}

export default BurgerBuilder;
