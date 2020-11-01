import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
            <br></br><br></br><br></br><br></br><br></br>
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">CryptoAgri</h1>
                  <p className="lead">
                    To most people, it is just dirt. To farmers, it is POTENTIAL
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;