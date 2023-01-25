import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const ExpensesSummary = ({expenses, periodName}: any) => {
  //it return the sum of the array elements which we can get
  const expensesSum = expenses.reduce(
    (sum: number, expense: any, index: number) => sum + expense.amount,
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});
