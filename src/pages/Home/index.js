import React, {useState, useEffect} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';

import {Button, Title} from 'react-native-paper';

import styles from './styles';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Previas from '../../components/Previas';
import Secao from '../../components/Secao';
import ButtonVertical from '../../components/ButtonVertical';

import api from '../../services/api';

const Home = () => {
  const [principal, setPrincipal] = useState({});
  const [secoes, setSecoes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getHome = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('/home');
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }

      setPrincipal(res.principal);
      setSecoes(res.secoes);
      setRefreshing(false);
    } catch (err) {
      setRefreshing(false);
      alert(err.message);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getHome} />
        }>
        <Header />

        <Hero filme={principal} />

        <View style={styles.menuHeader}>
          <ButtonVertical icon="plus" text="Minha Lista" />
          <Button
            icon="play"
            mode="contained"
            uppercase={false}
            color="#fff"
            onPress={() => console.log('Pressed')}>
            Assistir
          </Button>
          <ButtonVertical icon="information-outline" text="Saiba Mais" />
        </View>

        <View style={styles.previaContainer}>
          <Title style={styles.previaTitle}>Prévias</Title>
          <Previas filmes={secoes[0]} />
        </View>

        {secoes.map((secao, index) => (
          <Secao key={index} secao={secao} />
        ))}
      </ScrollView>
    </>
  );
};

export default Home;
