import React from 'react';

import {ImageBackground, Image, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const Hero = ({filme}) => {
  return (
    <ImageBackground source={{uri: filme.capa}} style={styles.hero}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={{uri: filme.logoMobile ? filme.logoMobile : filme.logo}}
      />

      <View style={styles.containerTop10}>
        <Image
          resizeMode="contain"
          style={styles.top10Badge}
          source={require('../../assets/badge-top-10.png')}
        />
        <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
      </View>

      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
      />
    </ImageBackground>
  );
};

export default Hero;
