import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyAction, updateExpenseAction } from '../redux/actions';
import fetchCurrencies from '../services/serviceCurrencies';

class EditWalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    // const { dispatch } = this.props;
    // const response = fetchCurrencies();
    // dispatch(fetchCurrencyAction());
    fetchCurrencyAction();
    // console.log(response);
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { updatedExpenses } = this.props;
    updatedExpenses(this.state);
  };

  render() {
    const { wallet } = this.props;
    const { currencies } = wallet;
    const { value, description, currency, method, tag } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="valueInput">
            Valor:
            <input
              type="number"
              name="value"
              id="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              type="select"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
              data-testid="currency-input"
            >
              {currencies.map((allCurrency) => (
                <option key={ allCurrency.id } value={ allCurrency }>
                  { allCurrency }
                  {/* {console.log(allCurrency)} */}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="method">
            Forma de pagamento
            <select
              id="method"
              type="select"
              name="method"
              value={ method }
              onChange={ this.handleChange }
              data-testid="method-input"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria
            <select
              id="tag"
              type="select"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
              data-testid="tag-input"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <button
            type="button"
            // disabled={ isDisable }
            onClick={ this.handleSubmit }

          >
            Editar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  updatedExpenses: (state) => dispatch(updateExpenseAction(state)),
  fetchCurrency: () => dispatch(fetchCurrencies()),
});

EditWalletForm.propTypes = {
  updatedExpenses: PropTypes.func.isRequired,
  wallet: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWalletForm);
