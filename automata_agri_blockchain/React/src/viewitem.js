import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import {abi,address} from './factory';
//var abi = factory.abi;
var factory = new web3.eth.Contract(abi,address);
class ViewItem extends Component {
    state = {
      code: ''
    };
    onSubmit = async event => {
      event.preventDefault();
  
      const accounts = await web3.eth.getAccounts();
  
      this.setState({ message: 'Waiting on transaction success...' });
  
      const val = await factory.methods._viewItem(this.state.code).call({from: accounts[0]});
      console.log(val);
      this.setState({ message: `Transaction successful and amount is ${val}` });
    };
    render() {
      return(
        <div className="box">
          <form onSubmit={this.onSubmit}>
            <h4>View Item</h4>
            <div className="inB">
              <input
                placeholder="Enter item code"
                value={this.state.code}
                onChange={event => this.setState({ code: event.target.value })}
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
  export default ViewItem;