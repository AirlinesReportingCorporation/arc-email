import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="arc-advanced-analytics-page">
        <div className="arc-advanced-analytics-jumbo-container">
          <div className="arc-advanced-analytics-jumbo">
            <div className="row align-items-center m-auto">
              <div className="col-lg-12">
                <div className="arc-advanced-analytics-title">
                  <h1 className="arc-advanced-h1">Advanced data analytics <br /> using Artificial Intelligence</h1>
                  <div className="ctaBtn arc-advanced-btn">Test</div>
                </div>
              </div>
            </div>
            <div className="row align-items-center m-auto">
              <div className="col-lg-12">
                <div className="arc-advanced-analytics-subtitle">
                Solving the most complex business challenges <br></br> using <span>ARC's machine learning techniques and technology <br></br>provides innovative analytical travel-related data.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
