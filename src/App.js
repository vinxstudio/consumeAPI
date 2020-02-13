import React from 'react';
import axios from 'axios';

export default class Animals extends React.Component {
  state = {
    name: '',
  }

  handleSubmit = event => {
    event.preventDefault();

    const animal = {
      name: this.state.name
    };

    axios.post('http://localhost:3000/api/animal', { animal })
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
        console.log(error)
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Animal Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}