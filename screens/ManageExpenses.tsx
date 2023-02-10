import {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import {GlobalStyles} from '../constants/styles';

const ManageExpense = ({route, navigation}: any) => {
  const editedExpenseID = route.params?.expenseID;
  const isEditing = !!editedExpenseID;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    console.log('Delete the Expense Which we add ');
    navigation.goBack();
  };

  const cancelHandler = () => {
    console.log('cancel the modal');
    navigation.goBack();
  };

  const confirmHandler = () => {
    console.log('Update the expense !Item');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button onPress={cancelHandler} mode="flat" style={styles.button}>
          Cancel
        </Button>
        <Button
          onPress={isEditing ? confirmHandler : cancelHandler}
          mode="flat"
          style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton onPress={deleteExpenseHandler} icon="trash" />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
  },
  deleteContainer: {
    marginTop: 24,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
