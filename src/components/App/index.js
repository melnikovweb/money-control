import { Component } from "react";

import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";

let id = 0;
class App extends Component {
  constructor(){
    super();
    this.state = {
      balance:0,
      transactions:[]
    }
    console.log('construcnor')
  }
  componentDidMount(){


  }
  componentWillUnmount(){

  }
  // shouldComponentUpdate(prevProps, prevState){
  //   console.log('shouldComponentUpdate')

  //   console.log(this.state)
  

  //   return prevState.balance <=0 ? false : true
  // }
  onIncrease = () =>{
    this.setState((state) => ({
      balance: state.balance + 1,
      transactions: [{
        label: 'increase',
        value: 1,
        id: id++
    }, ...state.transactions]
    })
    )
  }
  onDecrease = () =>{
    this.setState((state) => ({
      balance: state.balance - 1,
      transactions: [{
        label: 'decrease',
        value: 1,
        id: id++
    }, ...state.transactions]
    })) 
  }

  render(){
    console.log('render')
    return (
    <div>
      <Balance balance={this.state.balance}/>
      <Form/>
      <hr/>
        <Transactions transactions={this.state.transactions}/>
    </div>
    )}
  }
  
  export default App;