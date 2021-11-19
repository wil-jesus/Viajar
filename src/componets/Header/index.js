import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, TouchableOpacity, Text, SafeAreaView} from 'react-native';

import styles from './styles';

const Header = () => {
  return (
    <LinearGradient
      style={styles.header}
      colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}>
      <SafeAreaView style={styles.headerSafeAreaView}>
        <Image source={require('../../assets/logo-compact.png')} />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.colorWhite}>Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.colorWhite}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.colorWhite}>Minha Lista</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;
