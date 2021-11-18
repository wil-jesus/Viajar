import React from 'react';

import {View, Text, Alert} from 'react-native';
import Header from '../../components/Header';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const PaginaFake = () => {
  const navigation = useNavigation();

  const logoff = () => {
    Alert.alert(
      'Tem certeza?',
      'Você realmente deseja sair?',
      [
        {
          text: 'Sim, quero sair.',
          onPress: async () => {
            await AsyncStorage.clear();
            navigation.replace('Login');
          },
        },
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.texto}>Página Fake</Text>
      <Button
        style={{marginTop: 30}}
        icon="account-arrow-right"
        mode="contained"
        onPress={logoff}>
        Sair
      </Button>
    </View>
  );
};

export default PaginaFake;
