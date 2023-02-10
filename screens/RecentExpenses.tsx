import {useContext} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';

const RecentExpense = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense: any) => {
    console.log('expense :>> ', expense.date.getDay());
    const cureentDate = new Date();
   const cureentValueDate = cureentDate.getDay()
    if(cureentValueDate - expense.date.getDay() >7){
      
    }
  });
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Last 7 Days "
    />
  );
};

export default RecentExpense;
