import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  // Optimization
  onSearchChange = (event) => {
    console.log({ startingArray: this.state.monsters });
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField: searchField };
      },
      () => {
        console.log({ endingArray: this.state.monsters });
      }
    );
  };

  render() {
    console.log("render");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          className="monster-search-box"
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
