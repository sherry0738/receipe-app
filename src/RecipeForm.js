import React from "react";
import {
  TextField,
  Label,
  Input,
  Message
} from "@zendeskgarden/react-textfields";
import { Notification, Alert, Title } from "@zendeskgarden/react-notifications";
import { Button } from "@zendeskgarden/react-buttons";
import "./RecipeForm.css";

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div>
        <TextField>
          <Input
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
            placeholder="Recipe Name here"
          />
        </TextField>

        <Button
          onClick={() => {
            this.setState({ input: "" });
            this.props.click(this.state.input);
          }}
        >
          Add A Recipe
        </Button>
      </div>
    );
  }
}

// export { inputValue }
export default RecipeForm;
