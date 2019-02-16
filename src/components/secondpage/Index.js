import React, { Component } from "react";
import Card from "../common/Card";
import { data } from "../../data/data";
import "./index.css";
export default class index extends Component {
  state = { data };

  changeimage = img => {
    setTimeout(img, 3000);
  };

  render() {
    const photo = this.state.data.map(item => item.imageURL).map(item => item);

    return (
      <div className="container content">
        <div className="content-menu" />
        <div className="content-content">
          {this.state.data.map(item => (
            <Card
              title={item.name}
              img={setTimeout(function() {
                item.imageURL.map(item => item);
              }, 3000)}
              ingredients={item.ingredients.map(item => (
                <li>
                  {item.name}-->{item.quantity}
                </li>
              ))}
            />
          ))}
        </div>
      </div>
    );
  }
}
