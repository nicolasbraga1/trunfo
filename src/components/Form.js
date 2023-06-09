import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, hasTrunfo,
    } = this.props;
    return (
      <form>
        <label htmlFor="cardName">
          Nome:
          <input
            id="cardName"
            name="cardName"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="cardDescription">
          Descrição:
          <input
            id="cardDescription"
            name="cardDescription"
            type="textArea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="cardAttr1">
          Atributo 1:
          <input
            id="cardAttr1"
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            min={ 0 }
            max={ 90 }
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="cardAttr2">
          Atributo 2:
          <input
            id="cardAttr2"
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            min={ 0 }
            max={ 90 }
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="cardAttr3">
          Atributo 3:
          <input
            id="cardAttr3"
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            min={ 0 }
            max={ 90 }
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="cardImage">
          Imagem:
          <input
            id="cardImage"
            name="cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="cardRare">
          Raridade:
          <select
            data-testid="rare-input"
            onChange={ onInputChange }
            id="cardRare"
            name="cardRare"
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />

        {hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label htmlFor="cardTrunfo">
            Super trunfo
            <input
              id="cardTrunfo"
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        )}
        <br />

        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
