import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import {abi,address} from './factory';
//var abi = factory.abi;
var factory = new web3.eth.Contract(abi,address);
class NewItem extends Component {
    state = {
      manager: '',
      balance: '',
      value: '',
      message: '',
      itemname: '',
      itemcode: '',
      itemcost: '',
      itemcount: ''
    };
    onSubmit = async event => {
      event.preventDefault();

      const accounts = await web3.eth.getAccounts();

      this.setState({ message: 'Waiting on transaction success...' });

      await factory.methods._addnewitem(this.state.itemname,this.state.itemcount,
        this.state.itemcode,this.state.itemcost).send({
        from: accounts[0]
      });
      console.log(this.state);
      this.setState({ message: 'Transaction Successful' });
    };
    render(){
      return(
        <div className="box">

          <form onSubmit={this.onSubmit}>
            <h4>Add new item</h4>
            <div className="inB">
              
              <input
                placeholder="Enter item name"
                value={this.state.itemname}
                onChange={event => this.setState({ itemname: event.target.value })}
              />
            </div>
            <div className="inB">
              
              <input
                placeholder="Enter item code"
                value={this.state.itemcode}
                onChange={event => this.setState({ itemcode: event.target.value })}
              />
            </div>
            <div className="inB">
              
              <input
                placeholder="Enter item count"
                value={this.state.itemcount}
                onChange={event => this.setState({ itemcount: event.target.value })}
              />
            </div>
            <div className="inB">
              
              <input
                placeholder="Amount item cost"
                value={this.state.itemcost}
                onChange={event => this.setState({ itemcost: event.target.value })}
              />
            </div>
            <br></br>
            <button>Enter</button>
          </form>
          <h2>{this.state.message}</h2>
        </div>
      );
    }
}
export default NewItem;