import React from 'react'
import { CounterContext } from './CounterContext';


class ClassComponent extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <div>
                 <h1>Class Component</h1>
                 <h2>{this.props.counter}</h2>
                 <CounterContext.Consumer>
                     {(value)=>{
                         return <h2>{value}</h2>
                     }}
                 </CounterContext.Consumer>
            </div>)
    }
} 

export default ClassComponent;