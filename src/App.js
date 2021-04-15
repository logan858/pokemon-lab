import './App.css';
import React from 'react';
import Kubfu from './components/Kubfu/Kubfu'
import Bulbasaur from './components/Bulbasaur/Bulbasaur'
import Status from './components/Status/Status'

class App extends React.Component {
  state = {
    bulbasaurHP: 225,
    kubfuHP: 210,
    pokeStatus: "Bulbasaur, I choose you!"
  }
  bulbaAttack = () => {
    let move = ""
    if(this.state.kubfuHP > 0) {
      let bulbaMoveSet = [
        "Vine Whip!",
        "Solar Flare!",
        "Sludge Bomb!",
        "Giga Drain!",
      ]
      let ind = Math.floor(Math.random()*bulbaMoveSet.length)
      move = "Bulbasaur uses " + bulbaMoveSet[ind]
    } else {
      move = "Kubfu has fainted! Yes!"
    }
    this.setState({
      kubfuHP: this.state.kubfuHP - 10, 
      pokeStatus: move,
    })
  }
  
  kubfuAttack = () => {
    let move = ""
    if(this.state.bulbasaurHP > 0) {
      let kubfuMoveSet = [
        "Brick Break!",
        "Headbutt!",
        "Iron Head!",
        "Focus Punch!",
      ]
      let ind = Math.floor(Math.random()*kubfuMoveSet.length)
      move = "Kubfu uses " + kubfuMoveSet[ind]
    } else {
      move = "Bulbasaur, Noooo!!"
    }

    this.setState({
      bulbasaurHP: this.state.bulbasaurHP - 9,
      pokeStatus: move,
    })
  }

  render() {
    return (
      <div className="App">
        <Bulbasaur 
          bulbaAttack={this.bulbaAttack}
          bulbasaurHP={this.state.bulbasaurHP}
        />
        <Kubfu
          kubfuAttack={this.kubfuAttack}
          kubfuHP={this.state.kubfuHP}
        />
        <Status pokeStatus={this.state.pokeStatus}/>
      </div>
    );
  }
}

export default App;
