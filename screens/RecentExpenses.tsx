import {Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const RecentExpense = () => {
  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'fourth Item',
    },
    {
      id: '5',
      title: 'fifth Item',
    },
    {
      id: '6',
      title: 'six Item',
    },
    {
      id: '7',
      title: 'seven Item',
    },
    {
      id: '8',
      title: 'Eight Item',
    },
    {
      id: '9',
      title: 'Nine Item',
    },
    {
      id: '10',
      title: 'Ten Item',
    },
    {
      id: '11',
      title: 'Eleven Item',
    },
    {
      id: '12',
      title: 'Third Item',
    },
    {
      id: '13',
      title: 'First Item',
    },
    {
      id: '14',
      title: 'Second Item',
    },
    {
      id: '15',
      title: 'Third Item',
    },
  ];

  //   'https://jsonplaceholder.typicode.com/todos/1'
  type Iprops = {title: string};

  const Item = ({title}: Iprops) => {
    return (
      <TouchableOpacity>
        <View style={{height: 100}}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default RecentExpense;
