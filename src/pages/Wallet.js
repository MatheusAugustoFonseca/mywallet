import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import EditWalletForm from '../components/EditWalletForm';

class Wallet extends React.Component {
  render() {
    const { isEditing } = this.props;
    // const { wallet } = this.props;
    // const { isEditing } = wallet;
    return (
      <main>
        <Header />
        { isEditing ? <EditWalletForm /> : <WalletForm /> }
        <Table />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isEditing: state.wallet.isEditing,
  // wallet: state.wallet,
});

Wallet.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  // wallet: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
