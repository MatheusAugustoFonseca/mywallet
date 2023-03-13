import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWith';

describe('Test app login page', () => {
  it('should check if email/password input is render, and btn disable is working properly', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const EMAIL = 'teste@trybe.com';
    const PASSWORD = '1111111';
    const emailPlaceHolder = 'Insira seu email';
    const passwordPlaceHolder = 'Digite sua senha';
    const email = screen.getByPlaceholderText(emailPlaceHolder);
    const loginBtn = screen.getByText('Entrar');
    expect(loginBtn).toBeDisabled();
    userEvent.type(email, EMAIL);
    expect(email).toBeInTheDocument();
    const password = screen.getByPlaceholderText(passwordPlaceHolder);
    userEvent.type(password, PASSWORD);
    expect(password).toBeInTheDocument();
    expect(loginBtn).toBeEnabled();
    userEvent.click(loginBtn);
    expect(history.location.pathname).toBe('/carteira');
  });
  it('should check if login btn (Entrar) is render', () => {
    renderWithRouterAndRedux(<App />);
    const loginBtn = screen.getByText('Entrar');
    expect(loginBtn).toBeInTheDocument();
    userEvent.click(loginBtn);
  });
});
