import React from "react";

import Details from "./Details";

class App extends React.Component {
  constructor() {
    super();
    this.state = { userName: "Hipparage" };
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <p>Username is {this.state.userName}</p>
        <button onClick={() => this.setState({ userName: "Faizan" })}>
          Chnage Name
        </button>
        <Details userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
