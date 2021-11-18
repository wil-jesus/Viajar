import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  hero: {height: 200, width: '100%'},
  containerPadding: {padding: 20},
  buttonPlay: {
    marginVertical: 20,
  },
  menu: {
    width: '100%',
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  buttonBack: {
    padding: 20,
  },
  captionInfos: {
    marginVertical: 20,
  },
  captionWhite: {
    color: '#fff',
  },
  buttonTemporada: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.21)',
    marginVertical: 20,
  },
  colorWhite: {
    color: '#fff',
  },
});

export default styles;
