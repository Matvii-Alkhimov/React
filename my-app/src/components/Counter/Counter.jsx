import React from "react";
import "./Counter.css";
import { Buttons } from "./Buttons";
import { CounterValue } from "./CounterValue";

export class Counter extends React.Component {
    static defaultProps = {
        initialValue: 2,
    }

    state = {
        value: this.props.initialValue,
    }

    handleIncrement = ()=>{
        this.setState((prevState)=>{
            return {
                value: prevState.value + 1,
            }
        })
    }
    handleDecrement = ()=>{
        this.setState((prevState)=>{
            return {
                value: prevState.value - 1,
            }
        })
    }
    render () {
        return(
            <div className="Counter Counter__controls">
                <CounterValue value={this.state.value}></CounterValue>
                <Buttons 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement}
                ></Buttons>
            </div>
        )
    }
}