import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
class App extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };

  onIncrement = counter => {
    const newCounters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    newCounters[index].value++;
    this.setState({ counters: newCounters });
    //console.log(this.state.counters[index]);
  };

  handleDelete = counterId => {
    const newCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: newCounters });
  };
  handleReset = () => {
    const newCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: newCounters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.onIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
