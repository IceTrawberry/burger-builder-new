import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux';
import React, {Component} from 'react';

class BurgerBuilder extends Component{
  render(){
    return (
      <Aux>
      <Burger/>
      <div>Buid Controls</div></Aux>
    );
    }
}

export default BurgerBuilder;
