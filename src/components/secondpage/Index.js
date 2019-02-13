import React, { Component } from "react";
import Card from "../common/Card";
import { data } from "../../data/data";
export default class index extends Component {
  state = { data };

  render() {
    console.log(this.state);

    return (
      <div>
        {this.state.data.map(item => (
          <Card
            title={item.name}
            image={item.imageURL}
            steps={item.steps.map(item => (
              <li>{item}</li>
            ))}
          />
        ))}
      </div>
    );
  }
}
