import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux';
import React, {Component} from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends Component{
  constructor(props){
    super(props);
    this.state={
      ingredients:{
        salad:1,
        bacon:1,
        cheese:2,
        meat:2
      },
    },
    check:true;
  }


  render(){
    return (
      <Aux>
      <Burger ingredients={this.state.ingredients} check={this.state.check}>
      </Burger>
      <BuildControls/>
    );
    }
}

export default BurgerBuilder;
