import React, { Component } from 'react';
import Aux from '../../hoc/Aux';



class BurgerBuilder extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
    render () {
      let {count} = this.state;

        return (
            <Aux>
                <div>I want { count } Burgers</div>
                <button onClick={(e) => this.handleClick()}>Add burger</button>
            </Aux>
        );
    }
}


export default BurgerBuilder;
