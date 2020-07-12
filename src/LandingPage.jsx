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
            onClick={() => this.props.history.push(`/gartley`)}
          >
            Gartley
          </button>
        </div>

        <div class="mt-3">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => this.props.history.push(`/bat`)}
          >
            Bat
          </button>
        </div>

        <div class="mt-3">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => this.props.history.push(`/butterfly`)}
          >
            Butterfly
          </button>
        </div>

        <div class="mt-3">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => this.props.history.push(`/crab`)}
          >
            Crab
          </button>
        </div>

        <div class="mt-3">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => this.props.history.push(`/cypher`)}
          >
            Cypher
          </button>
        </div>

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

        <div class="mt-3">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => this.props.history.push(`/abcd`)}
          >
            Abcd
          </button>
        </div>

        <div class="mt-3">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => this.props.history.push(`/trendline`)}
          >
            Trendline
          </button>
        </div>

        <div class="mt-3">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => this.props.history.push(`/triangle`)}
          >
            Triangle
          </button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
