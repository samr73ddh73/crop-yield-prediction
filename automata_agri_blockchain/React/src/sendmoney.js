import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import {abi,address} from './factory';
//var abi = factory.abi;
var factory = new web3.eth.Contract(abi,address);
// var ClientReceipt = web3.eth.Contract(abi);
// var clientReceipt = ClientReceipt.at(factory.address);
// var events = clientReceipt.Deposit();

class SendMoney extends Component {
  state = {
    price: '',
    receiver: '',
    message: ''
  };
  async componentDidMount() {
    const manager = await factory.methods.manager().call();
    // const accounts = await web3.eth.getAccounts();
  //   events.watch(function(error, result){
     
  //     if (!error)
  //         console.log(result);
  // });
    this.setState({manager});
  }
  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    this.setState({ message: 'Waiting on transaction success...' });

    await factory.methods._sendMoney(this.props.to).send({
      from: accounts[0]
    });
    const receiver = this.props.to;
    const senderAdd = localStorage.getItem("payer");
    const amount = parseInt(localStorage.getItem("amount"));
    const receiverPrevMoney = parseInt(localStorage.getItem(receiver));
    const senderPrevMoney = parseInt(localStorage.getItem(senderAdd));
    const senderMoney = senderPrevMoney-amount;
    localStorage.setItem(receiver, receiverPrevMoney+amount);
    localStorage.setItem(senderAdd, senderMoney);
    this.setState({ message: `Transaction Successful! New Balance: ${senderMoney}` });
  };
  render(){
    console.log(this.props.to);
    return(
      <div className="box">
        <form onSubmit={this.onSubmit}>
          <h4>Send Money</h4>
          <div className="inB">
            <input
              placeholder="Send money to"
              value={this.state.receiver}
              onChange={event => this.setState({ receiver: event.target.value })}
            />
          </div>
          <br></br>
          <button variant="success">Enter</button>
        </form>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
export default SendMoney;