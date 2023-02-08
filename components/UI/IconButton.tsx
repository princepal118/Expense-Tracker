import {Image, Pressable, StyleSheet, TouchableOpacity} from 'react-native';

// interface ImageProps {
//   //   color: number;
//   onPress: () => void;
// }
const IconButton = ({onPress}: any) => {
  //   console.log('props.color :>> ', props.color);
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && style.pressedButton}>
      <TouchableOpacity style={style.buttonContainer}>
        <Image source={require('../../assets/images/recentExpenses.png')} />
      </TouchableOpacity>
    </Pressable>
  );
};

export default IconButton;

const style = StyleSheet.create({
  buttonContainer: {
    // borderRadius: 24,
    // padding: 8,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressedButton: {
    backgroundColor: 'white',
  },
});
