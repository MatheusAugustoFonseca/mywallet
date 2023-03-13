import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import App from '../App';
import renderWith from './helpers/renderWith';
import EditWalletForm from '../components/EditWalletForm';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';

describe('Test wallet page, with mock', () => {
  it('Should render the total field', () => {
    renderWith(<Header />);
    const totalValue = screen.getByTestId('total-field');
    expect(totalValue).toBeInTheDocument();
  });

  it('Should btn Editar despesa be rendered', () => {
    renderWith(<EditWalletForm />);
    const editBtn = screen.getByRole('button', { name: /editar despesa/i });
    expect(editBtn).toBeInTheDocument();
  });

  it('Should btn Adicionar despesa be rendered', () => {
    renderWith(<Wallet />);
    const AddBtn = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(AddBtn).toBeInTheDocument();
  });

  it('If elementes are rendered', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => mockData,
    }));
    const { store, history } = renderWith(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputSenha = screen.getByTestId('password-input');
    userEvent.type(inputEmail, 'teste@trybe.com');
    userEvent.type(inputSenha, '111111');
    const buttonEntrar = screen.getByText('Entrar');
    expect(buttonEntrar).toBeInTheDocument();
    userEvent.click(buttonEntrar);
    expect(history.location.pathname).toBe('/carteira');
    const inputValor = screen.getByTestId('value-input');
    const inputDescription = screen.getByTestId('description-input');
    const inputCurrency = await screen.getByTestId('currency-input');
    const inputMethod = screen.getByTestId('method-input');
    const inputTag = screen.getByTestId('tag-input');
    const buttonAdd = screen.getByText('Adicionar despesa');
    userEvent.type(inputValor, '10');
    userEvent.type(inputDescription, 'componet test');
    await waitFor(() => userEvent.selectOptions(inputCurrency, 'USD'));
    userEvent.selectOptions(inputMethod, 'Dinheiro');
    userEvent.selectOptions(inputTag, 'Alimentação');
    userEvent.click(buttonAdd);
    await waitFor(() => expect(global.fetch).toBeCalledTimes(2));
    const { wallet } = store.getState();
    expect(wallet.expenses).toHaveLength(1);
    const valorTotal = screen.getByTestId('total-field');
    expect(valorTotal).toHaveTextContent('47.53');
  });
});
