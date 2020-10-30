import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
//import factory from './factory';
import {abi,address} from './factory';
var factory = new web3.eth.Contract(abi,address);

class SendItem extends Component {
  state = {
    name: '',
    count: '',
    receiver: '',
    value: '',
    message: ''
  };
  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    this.setState({ message: 'Waiting on transaction success...' });
    // console.log(this.state);
    localStorage.setItem("payer", this.state.receiver);
    var result = await factory.methods._sendItem(this.state.name,this.state.count,this.state.receiver).send({
      from: accounts[0]
    });
    localStorage.setItem("amount", result.events && result.events.Deposit.returnValues._value);
    // console.log(result);
    // console.log(result.events.Deposit.returnValues._from);
    // console.log(result.events.Deposit.returnValues._to); //ye wala value
    this.props.syncAddress(result.events.Deposit.returnValues._to);
    // console.log(result.events.Deposit.returnValues._value);
    // console.log("I am here");
    this.setState({ message: 'Transaction Successful' });
  };
  render() {
    return(
      <div className="box">
        <form onSubmit={this.onSubmit}>
          <h5>Send Item</h5>
          <div className="inB">
            
            <input
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
              placeholder="Enter Item Name"
            />
          </div>
          <div className="inB">
            
            <input
              value={this.state.count}
              onChange={event => this.setState({ count: event.target.value })}
              placeholder="Enter Item Count"
            />
          </div>
          <div className="inB">
            
            <input
              value={this.state.receiver}
              placeholder="Enter receiver address"
              onChange={event => this.setState({ receiver: event.target.value })}
            />
          </div>
          <br></br><br></br>
          <button>Enter</button>
        </form>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
export default SendItem;
