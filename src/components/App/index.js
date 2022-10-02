import  { Component } from "react";

import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import {Wrapper} from './styles';

let id = 0;
class App extends Component {
  constructor(){
    super();

    this.state = {
      balance:0,
      transactions:[]
    }

    this.onChange = this.onChange.bind(this);
    console.log('construcnor')
  }
  
  onChange = (value) => {
  this.setState((state) => ({
    balance: state.balance + +value,
    transactions: [{
      value, 
      label:'change',
      id: ++id}, 
      ...state.transactions]
  }))
  }

  render(){
    return (
      <Wrapper>
        <Balance balance={this.state.balance}/>
        <Form onChange={this.onChange}/>
        <hr/>
         <Transactions transactions={this.state.transactions}/>
      </Wrapper>
    )}
  }
  
  export default App;