import React, { Component } from "react";
import Index from "../src/components/index/Index";
import { Provider } from "react-redux";
import store from "./store";
import Secondpage from "./components/secondpage/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];

    const changeNumber = () => {
      for (let i = 0; i < data.length; i++) {
        console.log("new data ", data[i]);
      }
    };
    setInterval(function() {
      changeNumber();
    }, 3000);
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <div className="App">
              <Route exact path="/" component={Index} />
              <Route path="/secondPage" component={Secondpage} />
            </div>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
