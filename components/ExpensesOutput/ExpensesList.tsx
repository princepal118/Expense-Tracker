import {FlatList, Text, View} from 'react-native';
import ExpenseItem from './ExpenseItem';
interface Type {
  id: string;
  description: string;
  amount: number;
  date: Date;
}
[];

interface ite {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

const renderExpensesItem = (itemData: any) => {
  return <ExpenseItem {...itemData.item} />;
};
const ExpensesList = ({expenses, expensesPeriod}: any) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item: any) => item.id}
    />
  );
};
export default ExpensesList;
