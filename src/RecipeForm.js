import React from 'react';
import { TextField, Label, Hint, Input, Message } from '@zendeskgarden/react-textfields';
import { Button } from '@zendeskgarden/react-buttons';
import './RecipeForm.css'

class RecipeForm extends React.Component {
constructor(props) {
  super(props) 
    this.state= {
      input:''
    }

}
  render(){
    return(
      <div>
      <TextField>
        <Input 
        value={this.state.input} 
        onChange={e => {
          this.setState({input: e.target.value})
        }}
        placeholder="Recipe Name here" />
      </TextField>
      <Button
        // onClick={() =>{
          
        // }}
      >
        Add Recipe
      </Button>

      </div>
    )
  }
} 

export default RecipeForm