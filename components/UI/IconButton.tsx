import {Image, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
interface ImageProps {
  //   color: number;
  onPress: () => void;
  icon: string;
}
const IconButton = ({onPress, icon}: ImageProps) => {
  const logo = require('../../assets/images/delete.png');
  const plusImage = require('../../assets/images/plusBlack.png');
  return (
    <Pressable>
      <TouchableOpacity style={style.buttonContainer} onPress={onPress}>
        <Image
          source={icon == 'trash' ? logo : plusImage}
          style={{width: 20, height: 20}}
        />
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
