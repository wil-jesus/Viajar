import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    marginTop: 10,
    marginBottom: 50,
  },
  oval: {
    padding: 2.5,
    width: 90,
    height: 90,
    borderRadius: 90,
  },
  capa: {
    height: 85,
    width: 85,
    borderRadius: 85,
  },
  gradiente: {
    width: '100%',
    height: 40,
    position: 'absolute',
    zIndex: 9,
    bottom: 10,
  },
  logo: {
    width: 90,
    height: 45,
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    alignSelf: 'center',
  },
});

export default styles;
