import {createContext, useReducer} from 'react';

interface AddExpensesProps {
  description: string;
  date: Date;
  amount: number;
}
interface IdProps {
  id: string;
}

interface Type {
  id: string;
  description: string;
  amount: number;
  date: Date;
}
[];

const DUMMY_EXPENSES: Type[] = [
  {
    id: 'e1',
    description: 'Pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'Pair of Trousers',
    amount: 89.29,
    date: new Date('2021-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'A book ',
    amount: 59.9,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Another Book ',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e6',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e7',
    description: 'A book ',
    amount: 59.9,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e8',
    description: 'Another Book ',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e9',
    description: 'Another Book ',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e10',
    description: 'Another Book ',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, date, amount}: AddExpensesProps) => {},
  deleteExpense: (id: IdProps) => {},
  updateExpense: (
    id: IdProps,
    {description, date, amount}: AddExpensesProps,
  ) => {},
});

const expensesReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();

      return [{...action.payload, id: id}, ...state];
    case 'UPDATE':
      //THis gives the index od the array and from index we can update the element
      const updateTableExpenseIndex = state.findIndex(
        (expense: any) => expense.id === action.payload.id,
      );

      const updatableExpense = state[updateTableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updateTableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense: any) => expense.id != action.payload.id);
    default:
      return state;
  }
};

//conect the expenses reducer function with useReducer

const ExpensesContextProvider = ({children}: any) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData: any) => {
    dispatch({type: 'ADD', payload: expenseData});
  };

  const deleteExpense = (id: string) => {
    dispatch({type: 'DELETE', payload: id});
  };

  const updateExpense = (id: string, expenseData: AddExpensesProps) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  };

  const value: any = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
