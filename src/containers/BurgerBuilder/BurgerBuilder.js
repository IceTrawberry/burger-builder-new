import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux';
import React, {Component} from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 1,
  cheese: 0.5,
  meat: 3
}
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchasable:false,
    };
  };

  updatePurchaseState(ingredients){
      const sum=Object.keys(ingredients).map(igKey=>{
        return ingredients[igKey];
      }).reduce((sum,el)=>{
        return sum+el;
      },0);
      this.setState({purchasable:sum>0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);

  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = Boolean(disabledInfo[key] <= 0)
    }
    return (<Aux>
      <Modal><OrderSummary ingredients={this.state.ingredients}/></Modal>
      <Burger ingredients={this.state.ingredients}/>
      <BuildControls ingredientAdded={this.addIngredientHandler}
        ingredientRemoved={this.removeIngredientHandler}
         disabled={disabledInfo}
         price={this.state.totalPrice}
         purchasable={this.state.purchasable}/>
    </Aux>);
  }
}

export default BurgerBuilder;
