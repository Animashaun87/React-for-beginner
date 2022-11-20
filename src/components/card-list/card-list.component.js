import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => (
          <hi key={monster.id}>{monster.name}</hi>
        ))}
      </div>
    );
  }
}

export default CardList;
