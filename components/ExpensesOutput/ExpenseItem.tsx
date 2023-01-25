import {View, Text, Pressable, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const ExpenseItem = ({description, amount, date}: any) => {
  const dateValue = date.toLocaleString().slice(0, 9);
  console.log('dateValue :>> ', dateValue);
  return (
    <Pressable style={styles.expenseItem}>
      <View>
        <Text style={(styles.description, styles.textBase)}>{description}</Text>
        <Text style={styles.textBase}>{dateValue} </Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}> {'amount'} </Text>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
    width: 50,
  },
});
