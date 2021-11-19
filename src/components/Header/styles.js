import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
  },
  headerSafeAreaView: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 50 : 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 70,
  },
  colorWhite: {
    color: '#fff',
  },
});

export default styles;
