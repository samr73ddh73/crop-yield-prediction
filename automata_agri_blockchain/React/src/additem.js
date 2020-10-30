//To update items
import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import {abi,address} from './factory';
//var abi = factory.abi;
var factory = new web3.eth.Contract(abi,address);
class AddItem extends Component {
    state = {
      count: '',
      code: ''
    };
    onSubmit = async event => {
      event.preventDefault();
  
      const accounts = await web3.eth.getAccounts();
  
      this.setState({ message: 'Waiting on transaction success...' });
  
      await factory.methods._additem(this.state.count,this.state.code).send({
        from: accounts[0]
      });
  
      this.setState({ message: 'Transaction Successful' });
    };
    render() {
      return(
        <div>
          <form onSubmit={this.onSubmit}>
            <h4>Update Item</h4>
            <div>
              <label>Enter item count</label>
              <input
                value={this.state.count}
                onChange={event => this.setState({ count: event.target.value })}
              />
            </div>
            <div>
              <label>Enter item code</label>
              <input
                value={this.state.code}
                onChange={event => this.setState({ code: event.target.value })}
              />
            </div>
            <button>Enter</button>
          </form>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  }
  export default AddItem;