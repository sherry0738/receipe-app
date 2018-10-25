import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { XXL } from "@zendeskgarden/react-typography";
import { Notification, Alert, Title } from "@zendeskgarden/react-notifications";
import Card, { CardList } from "./Card";
import RecipeForm from "./RecipeForm";
// import { inputValue } from './RecipeForm'
// console.log(inputValue);

class App extends Component {
  constructor(props) {
    // this.addRecipesToList = this.addRecipesToList.bind(this)
    super(props);
    this.state = {
      recipes: [
        {
          title: "recipe 1"
        },
        {
          title: "recipe 2"
        }
      ],
      err: null
    };
  }

  addRecipesToList = inputValue => {
    if (inputValue === "") {
      this.setState({ err: "Need recipe name" });
      return;
    }

    if (
      this.state.recipes.filter(recipe => recipe.title === inputValue).length
    ) {
      this.setState({ err: "Recipe's already existing." });
      return;
    }

    this.setState({
      recipes: this.state.recipes.concat({ title: inputValue }),
      input: "",
      err: null
    });
  };

  render() {
    return (
      <div>
        <header>
          <XXL>Recipes</XXL>
        </header>
        {Boolean(this.state.err) && (
          <Notification type="warning" container="top-right" insert="top">
            <Title>{this.state.err}</Title>
          </Notification>
        )}

        <RecipeForm
          recipes={this.state.recipes}
          click={inputValue => this.addRecipesToList(inputValue)}
          // showMsg={this.addNotification}
        />
        <CardList>
          {this.state.recipes.map(recipe => (
            <Card title={recipe.title} />
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
