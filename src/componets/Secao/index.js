import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import {Title} from 'react-native-paper';

import styles from './styles';

const Secao = ({secao, hasTopBorder}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {hasTopBorder && <View style={styles.topBorder} />}
      <Title style={styles.secaoTitle}>{secao[0]?.generos[0]}</Title>
      <FlatList
        horizontal
        style={styles.lista}
        data={secao}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={item}
            onPress={() => navigation.navigate('Filme', {filme: item, secao})}>
            <ImageBackground
              key={index}
              style={[
                {
                  marginLeft: index === 0 ? 20 : 0,
                  marginRight: 10,
                },
                styles.capa,
              ]}
              source={{uri: item.capa}}>
              <Image
                style={styles.logo}
                resizeMode="contain"
                source={{uri: item.logoMobile ? item.logoMobile : item.logo}}
              />
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Secao;
