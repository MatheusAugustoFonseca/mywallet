// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCY,
  RECEIVED_CURRENCIES,
  // FAILURE_CURRENCY,
  ADD_EXPENSES,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE,
}
  from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isEditing: false,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCY: return {
    ...state,
    // // ...action.payload,
    // currencies: action.payload.currencies,
    // expenses: action.payload.expenses,
    // editor: action.payload.editor,
    // idToEdit: action.payload.idToEdit,
  };
  case RECEIVED_CURRENCIES: return {
    ...state,
    currencies: Object.keys(action.currencies).filter((currency) => currency !== 'USDT'),
  };
  case ADD_EXPENSES: return {
    ...state,
    expenses: [...state.expenses.filter((filled) => filled.currency !== ''),
      { id: state.expenses.length, ...action.expenses }],
  };
  case DELETE_EXPENSE: return {
    ...state,
    expenses: [...state.expenses.filter((deleted) => deleted.id !== action.id)],
  };
  case EDIT_EXPENSE: return {
    ...state,
    idToEdit: action.id,
    isEditing: true,
  };
  case UPDATE_EXPENSE: return {
    ...state,
    expenses: state.expenses.map((expense) => {
      if (expense.id === state.idToEdit) {
        return {
          ...expense,
          ...action.payload,
        };
      }
      return expense;
    }),
    isEditing: false,
    idToEdit: 0,
  };
  default:
    return state;
  }
}

export default walletReducer;
