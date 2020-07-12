import React, { Component } from "react";
import "./App.css";

class LandingPage extends Component {
  state = {};

  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="app mt-5 pt-5" style={{ textAlign: "center" }}>
        {/* <Table striped bordered hover>
        <tbody>
          <tr>Wolfe</tr>
        </tbody>
      </Table> */}
        <div class="mt-3">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => this.props.history.push(`/wolfe`)}
          >
            Wolfe
          </button>
        </div>
        <div class="mt-3">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => this.props.history.push(`/channel`)}
          >
            Channel
          </button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
