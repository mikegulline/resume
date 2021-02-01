import React, { Component } from "react";

class Switch extends Component {
  state = { toggle: false };
  handelSwitch = (e) => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    this.state.toggle
      ? document.getElementById("root").classList.remove("dark")
      : document.getElementById("root").classList.add("dark");
    return (
      <section id="navbar">
        <div class="toggleX">
          <input type="checkbox" id="switch" onChange={this.handelSwitch} />
          <label for="switch" aria-hidden="true">
            Toggle
          </label>
        </div>
      </section>
    );
  }
}

export default Switch;
