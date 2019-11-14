import React, { Component } from "react";
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [], searchField: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterdArray = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <h1 style={{ marginLeft: 480, marginBottom: 10, fontColor: "blue" }}>
          Monster Rolodex
        </h1>
        {/* <input
          style={{ marginLeft: 530, marginBottom: 10 }}
          type="search"
          placeholder="Type here to search"
          onChange={e => this.setState({ searchField: e.target.value })}
        ></input> */}
        <SearchBox
          handleChange={e => this.setState({ searchField: e.target.value })}
        ></SearchBox>
        <CardList monsters={filterdArray}></CardList>
      </div>
    );
  }
}

export default App;
