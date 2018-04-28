//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import hero from "./hero.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    hero,
    clickedHero: [],
    score: 0
  };

//when you click on a card ... the hero is taken out of the array
  imageClick = event => {
    const currentHero = event.target.alt;
    const HeroAlreadyClicked =
      this.state.clickedHero.indexOf(currentHero) > -1;

//if you click on a hero that has already been selected, the game is reset and cards reordered
    if (HeroAlreadyClicked) {
      this.setState({
        hero: this.state.hero.sort((a, b) => {
          return 0.5 - Math.random();
        }),
        clickedHero: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available hero, your score is increased and cards reordered
    } else {
      this.setState(
        {
          hero: this.state.hero.sort((a, b) => {
            return 0.5 - Math.random();
          }),
          clickedHero: this.state.clickedHero.concat(
            currentHero
          ),
          score: this.state.score + 1
        },
//if you get all 12 hero correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              hero: this.state.hero.sort((a, b) => {
                return 0.5 - Math.random();
              }),
              clickedHero: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.hero.map(hero => (
            <GameCard
              imageClick={this.imageClick}
              id={hero.id}
              key={hero.id}
              image={hero.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;