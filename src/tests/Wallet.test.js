import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWith';

describe('Test app Wallet page', () => {
  it('check if header is working', () => {
    const { history } = renderWithRouterAndRedux(<App />);
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
    expect(history.location.pathname).toBe('/carteira');
  });
});
