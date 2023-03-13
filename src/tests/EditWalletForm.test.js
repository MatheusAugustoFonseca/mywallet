import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWith';

describe('Test EditWalletForm component', () => {
  it('should appear all field sets', () => {
    renderWithRouterAndRedux(<App />);
    const EMAIL = 'teste@trybe.com';
    const PASSWORD = '1111111';
    const emailPlaceHolder = 'Insira seu email';
    const passwordPlaceHolder = 'Digite sua senha';
    const email = screen.getByPlaceholderText(emailPlaceHolder);
    const loginBtn = screen.getByText('Entrar');
    userEvent.type(email, EMAIL);
    const password = screen.getByPlaceholderText(passwordPlaceHolder);
    userEvent.type(password, PASSWORD);
    userEvent.click(loginBtn);
    // const valueInput = 10;
    // const descriptionInput = 'testeWallet';
    // const currencyInput = 'USD';
    // const methodInput = 'Dinheiro';
    // const categoryInput = 'Alimentação';
    const valueField = screen.getByTestId('value-input');
    expect(valueField).toBeInTheDocument();
    // userEvent.type(valueInput, valueField);
    const descriptionField = screen.getByTestId('description-input');
    expect(descriptionField).toBeInTheDocument();
    const currencyField = screen.getByTestId('currency-input');
    expect(currencyField).toBeInTheDocument();
    const methodField = screen.getByTestId('method-input');
    expect(methodField).toBeInTheDocument();
    const categoryField = screen.getByTestId('tag-input');
    expect(categoryField).toBeInTheDocument();
    // const editBtn = screen.getByRole('button', { name: /editar despesa/i });
    // expect(editBtn).toBeInTheDocument();
  });
});
