import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GlobalStyles} from '../../constants/styles';
interface ButtonProps {
  children?: string;
  onPress?: () => void;
  mode?: string;
  style?: any;
}
const Button = ({children, onPress, mode, style}: ButtonProps) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    alignItems: 'center',
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    // backgroundColor: GlobalStyles.colors.primary100,
    backgroundColor: 'orange',
    borderRadius: 4,
  },
});
