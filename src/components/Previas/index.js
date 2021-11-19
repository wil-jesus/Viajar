import React from 'react';

import {FlatList, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const Previas = ({filmes}) => {
  return (
    <FlatList
      horizontal
      style={styles.container}
      data={filmes}
      renderItem={({item, index}) => (
        <TouchableOpacity
          key={index}
          style={{marginLeft: index == 0 ? 20 : 0, marginRight: 10}}>
          <LinearGradient style={styles.oval} colors={['#E50914', '#5E0509']}>
            <Image style={styles.capa} source={{uri: item.capa}} />
          </LinearGradient>

          <Image
            style={styles.logo}
            resizeMode="contain"
            source={{uri: item.logoMobile ? item.logoMobile : item.logo}}
          />

          <LinearGradient
            style={styles.gradiente}
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default Previas;
