import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import { abi, address } from './factory';
import Landing from "./landing";
//var abi = factory.abi;

import NewItem from './newitem';
import AddItem from './additem';
import SendItem from './senditem';
import SendMoney from './sendmoney';
import ViewItem from './viewitem';
const factory = new web3.eth.Contract(abi, address);
class App extends Component {
  state = {
    manager: '',
    balance: '',
    value: '',
    message: '',
    itemname: '',
    itemcode: '',
    itemcost: '',
    itemcount: '',
    receiverAddress: '',
    moneyLeft: ''
  };

  async componentDidMount() {
    const manager = await factory.methods.manager().call();
    const accounts = await web3.eth.getAccounts();
    let moneyLeft = localStorage.getItem(accounts[0]);
    if(!moneyLeft) {
      moneyLeft = 1000;
      localStorage.setItem(accounts[0], moneyLeft);
    }
    // this.setState(moneyLeft);
    // console.log(factory.options.address);
    // const balance = await web3.eth.getBalance(factory.options.address);
    // const balance = await web3.eth.getBalance(accounts[0]);
    const balance = await web3.eth.getBalance(manager);
    // console.log(balance);
    const message = accounts;
    this.setState({ manager, message, balance, moneyLeft });
  }

  syncAddress = (addr) => {
    this.setState({ receiverAddress: addr });
  }

  render() {
    return (
      <div>
        <Landing></Landing> 
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto dark-overlay-form ">
                <h1 className="display-6 text-center">Manage Transactions</h1>
                  {/* <div style={{ display: 'flex', flexDirection: 'column', padding:30 }} className="all-boxes"> */}
                    <div style={{ display: 'flex', flex: 1 }}>
                      <NewItem />
                      <br></br>
                      <SendItem syncAddress={this.syncAddress} />
                    </div>
                    <div style={{ display: 'flex', flex: 1 }}>
                      <SendMoney to={this.state.receiverAddress} />
                      <br></br>
                      <ViewItem />
                    </div>
                  {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
