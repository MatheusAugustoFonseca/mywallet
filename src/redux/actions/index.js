// Coloque aqui suas actions
import fetchCurrencies from '../../services/serviceCurrencies';

export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVED_CURRENCIES = 'RECEIVED_CURRENCIES';
export const FAILURE_CURRENCY = 'FAILURE_CURRENCY';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const userAction = (payload) => ({
  type: USER_ACTION,
  payload,
  // payload{email}
});

// export const walletAction = (payload) => ({
//   type: WALLET_ACTION,
//   payload,
// });

export const requestCurrencyAction = () => ({
  type: REQUEST_CURRENCY,
});

export const receivedCurrenciesAction = (currencies) => ({
  type: RECEIVED_CURRENCIES,
  currencies,
});

export const failureCurrencyAction = (error) => ({
  type: FAILURE_CURRENCY,
  error,
});

export const fetchCurrencyAction = () => async (dispatch) => {
  dispatch(requestCurrencyAction());
  try {
    const response = await fetchCurrencies();
    dispatch(receivedCurrenciesAction(response));
  } catch (error) {
    dispatch(failureCurrencyAction(error));
  }
};

export const addExpense = (expenses) => ({
  type: ADD_EXPENSES,
  expenses,
});

export const deleteExpenseAction = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const editExpenseAction = (id) => ({
  type: EDIT_EXPENSE,
  id,
});

export const updateExpenseAction = (payload) => ({
  type: UPDATE_EXPENSE,
  payload,
});
