import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { XXL } from '@zendeskgarden/react-typography'
import Card, { CardList } from './Card'
import RecipeForm from './RecipeForm'


class App extends Component {
constructor(props) {
  super(props)
  this.state={
    recipes: [
      {
        title: 'recipe 1',
      },
      {
        title: 'recipe 2',
      }
    ],
  }
}

//let AddRecipesToList = (recipe, recipes) => {recipes.push(recipe)}

  render() {
    const recipes = this.state.recipes;
    return (
      <div>
        <header><XXL>Recipes</XXL></header>
        <RecipeForm 
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
