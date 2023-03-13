import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import store from '../redux/store';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalAmount = expenses.reduce((acc, current) => {
      const { value, currency, exchangeRates } = current;
      const { ask } = exchangeRates[currency];
      return acc + (value * ask);
    }, 0);

    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ totalAmount.toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
        header
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
// export default Header;

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape().isRequired,
};
