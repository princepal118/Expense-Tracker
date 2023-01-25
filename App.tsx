import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpenses';
import RecentExpense from './screens/RecentExpenses';
import AllExpnese from './screens/AllExpenses';
import {GlobalStyles} from './constants/styles';
import {Image, View} from 'react-native';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverView = () => {
  return (
    <BottomTabs.Navigator
      // to change the color of the header we use the screenOptions.
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}>
      <BottomTabs.Screen
        name="Recent Expenses"
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../MyAwesomeProject/assets/images/allExpenses.png')}
              />
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name=" All Expenses"
        component={AllExpnese}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../MyAwesomeProject/assets/images/recentExpenses.png')}
              />
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverView"
            component={ExpensesOverView}
            options={{headerShown: false}}
          />

          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
