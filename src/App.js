import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Aux from './hoc/Aux'
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (<Aux>
        <BurgerBuilder />
    </Aux>);
  }
}
export default App;
