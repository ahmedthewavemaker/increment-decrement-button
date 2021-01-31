import React, {Component} from 'react';


class Counter extends Component{
    state={
        count: 45

    }
    handleClickUp = () =>{
        this.setState(({count}) => ({
            count: count + 1

        }))
    }
    handleClickDown = () =>{
        this.setState(({count}) => ({
            count: count - 1

        }))
    }

    render() {
      

        return(
        <div >
            <button onClick={this.handleClickUp} >Up </button>
            <button onClick={this.handleClickDown} >Down </button>
            <span>{this.state.count}</span>

        </div>
        )
    }

}
export default Counter;