import Burger from './components/Burger/Burger'
import Aux from './hoc/Aux'
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (<Aux>
        <Burger />
    </Aux>);
  }
}
export default App;
