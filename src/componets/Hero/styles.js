import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  hero: {height: 400, width: '100%'},
  logo: {
    marginTop: 200,
    alignSelf: 'center',
    height: 150,
    width: 300,
    position: 'absolute',
    zIndex: 10,
  },
  containerTop10: {
    position: 'absolute',
    zIndex: 10,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  top10Badge: {width: 20, height: 20, marginRight: 10},
  top10Text: {color: '#fff', fontSize: 15},
  gradient: {
    width: '100%',
    height: 150,
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
  },
});

export default styles;
