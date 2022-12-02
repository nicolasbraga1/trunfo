import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
