import React, {useState, useEffect} from 'react';

import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import {Title, Button, Paragraph, Caption} from 'react-native-paper';
import ButtonVertical from '../../components/ButtonVertical';
import Secao from '../../components/Secao';
import Episodeo from '../../components/Episodeo';

import {SinglePickerMaterialDialog} from 'react-native-material-dialog';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';

import styles from './styles';

const Filme = ({route, navigation}) => {
  const {filme, secao} = route.params;
  const [visible, setVisible] = useState(false);
  const [temporada, setTemporada] = useState({
    value: filme?.temporadas[0]?._id,
    label: filme?.temporadas[0]?.titulo,
  });
  const [episodeos, setEpisodeos] = useState([]);

  const getEpisodeos = async (temporada_id) => {
    try {
      const response = await api.get(`/episodeo/temporada/${temporada_id}`);
      const res = response.data;
      if (res.error) {
        alert(res.message);
        return false;
      }
      setEpisodeos(res.episodeos);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (filme.tipo === 'serie') {
      getEpisodeos(temporada.value);
    }
  }, []);

  return (
    <>
      <SinglePickerMaterialDialog
        title={`${filme.titulo} - Temporadas`}
        items={filme?.temporadas.map((temporada) => ({
          value: temporada._id,
          label: temporada.titulo,
        }))}
        visible={visible}
        selectedItem={temporada}
        onCancel={() => setVisible(false)}
        onOk={(result) => {
          setVisible(false);
          setTemporada(result.selectedItem);
          getEpisodeos(result.selectedItem.value);
        }}
      />
      <ScrollView style={styles.container}>
        <ImageBackground source={{uri: filme.capa}} style={styles.hero}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon color="#fff" name="arrow-left" size={25} />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.containerPadding}>
          <Title>{filme.titulo}</Title>
          <Button
            style={styles.buttonPlay}
            icon="play"
            mode="contained"
            uppercase={false}
            color="#fff"
            onPress={() => console.log('Pressed')}>
            Assistir
          </Button>

          <Paragraph>{filme.descricao}</Paragraph>

          <Caption style={styles.captionInfos}>
            Elenco:{' '}
            <Caption style={styles.captionWhite}>
              Silvio Sampaio, Juliana Righi, Omar Sampaio, Mikael Lopes.
            </Caption>{' '}
            Gêneros:{' '}
            <Caption style={styles.captionWhite}>
              Ação, Aventura, Dramático.
            </Caption>{' '}
            Cenas e momentos:{' '}
            <Caption style={styles.captionWhite}>Violentos.</Caption>
          </Caption>

          <View style={styles.menu}>
            <ButtonVertical icon="plus" text="Minha Lista" />
            <ButtonVertical icon="thumb-up" text="Classifique" />
            <ButtonVertical icon="send" text="Compartilhe" />
            <ButtonVertical icon="download" text="Baixar" />
          </View>

          {filme.tipo === 'serie' && (
            <>
              <TouchableOpacity
                style={styles.buttonTemporada}
                onPress={() => {
                  setVisible(true);
                }}>
                <Text style={styles.colorWhite}>{temporada.label}</Text>
                <Icon name="chevron-down" size={20} color="#fff" />
              </TouchableOpacity>
              <FlatList
                data={episodeos}
                renderItem={({item, index}) => <Episodeo episodeo={item} />}
              />
            </>
          )}
        </View>
        {filme.tipo === 'filme' && <Secao secao={secao} hasTopBorder />}
      </ScrollView>
    </>
  );
};

export default Filme;

