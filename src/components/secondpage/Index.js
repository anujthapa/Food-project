import React, { Component } from "react";
import Card from "../common/Card";
export default class index extends Component {
  state = [
    {
      title: "vegetarian"
    },
    {
      title: "Vegan"
    },
    {
      title: "Italian"
    },
    {
      title: "Gluten Free"
    },
    {
      title: "Asian"
    },
    {
      title: "Japanese"
    },
    {
      title: "American"
    },
    {
      title: "Spanish"
    },
    {
      title: "Mexican"
    },
    {
      title: "Healthy"
    }
  ];

  render() {
    return (
      <div>
        {this.state.map(item => (
          <Card title={item.title} />
        ))}
      </div>
    );
  }
}
