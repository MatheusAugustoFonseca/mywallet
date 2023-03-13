import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../redux/actions';
// import fetchCurrencies from '../services/serviceCurrencies';

class Login extends React.Component {
  state = {
    email: '',
    inputPassword: '',
    isDisable: true,
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const minPasswordLength = 6;
      const { email, inputPassword } = this.state;
      const passwordLength = inputPassword.length;
      if (EMAIL.test(email) && passwordLength >= minPasswordLength) {
        this.setState({ isDisable: false });
      } else {
        this.setState({ isDisable: true });
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    // console.log('clicou no btn entrar');
    dispatch(userAction(this.state));
    history.push('/carteira');
  };

  render() {
    const { email, inputPassword, isDisable } = this.state;
    return (
      <div>
        <form
          onSubmit={ this.handleSubmit }
        >
          <label htmlFor="form">
            Email
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              value={ email }
              placeholder="Insira seu email"
            />
          </label>
          <label htmlFor="#">
            Password
            <input
              type="password"
              name="inputPassword"
              data-testid="password-input"
              onChange={ this.handleChange }
              value={ inputPassword }
              placeholder="Digite sua senha"
            />
          </label>
          <button
            type="submit"
            disabled={ isDisable }

          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
