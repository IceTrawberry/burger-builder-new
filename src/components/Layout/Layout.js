import Aux from '../../hoc/Aux'
import React from 'react';

const layout= (props) =>(
  <Aux>
  <div>Toolbar, SideDrawer, Backdrop</div>
    {props.children}
  <main>
  </main>
  </Aux>
);

export default layout;
