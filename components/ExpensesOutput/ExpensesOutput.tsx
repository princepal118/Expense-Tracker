import {View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

interface IProps {
  expensesPeriod: string;
}

interface Type {
  id: string;
  description: string;
  amount: number;
  date: Date;
}
[];

const ExpensesOutput = ({/*expenses*/ expensesPeriod}: IProps) => {
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

  // console.log('DUMMY_EXPENSES :>> ', DUMMY_EXPENSES);
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
