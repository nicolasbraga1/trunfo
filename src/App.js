import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    isSaveButtonDisabled: true,
  };

  validateBtn = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;
    const cost = 90;
    const maxCost = 210;
    const checkName = cardName.length !== 0;
    const checkDescription = cardDescription.length !== 0;
    const checkAttr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= cost;
    const checkAttr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= cost;
    const checkAttr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= cost;
    const checkTotal = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
    <= maxCost;
    const checkImage = cardImage.length !== 0;
    const checkRare = cardRare.length !== 0;
    this.setState({
      isSaveButtonDisabled: !(
        checkName && checkDescription && checkAttr1 && checkAttr2 && checkAttr3
        && checkTotal && checkImage && checkRare
      ),
    });
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.validateBtn);
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
