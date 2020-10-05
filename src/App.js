import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    console.log("add");
    // this.setState({ count: this.state.count + 1 });
    // this.setState((current) => ({ count: this.state.count + 1 }));
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    console.log("minus");
    // this.setState({ count: this.state.count - 1 });
    // this.setState((current) => ({ count: this.state.count - 1 }));
    this.setState((current) => ({ count: current.count + 1 }));
  };

  constructor(props) {
    super(props);
    console.log("consturctor");
  }

  componentDidMount() {
    console.log("did mount");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  componentWillUnmount() {
    console.log("will unmount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>the number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minux</button>
      </div>
    );
  }
}

export default App;
