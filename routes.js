import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Filme from './src/pages/Filme';
import PaginaFake from './src/pages/PaginaFake';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="inicio"
      activeColor="#fff"
      shifting={false}
      barStyle={{backgroundColor: '#141414'}}>
      <Tab.Screen
        name="inicio"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="buscar"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="em-breve"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Em Breve',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="play-speed" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="downloads"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="download" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="mais"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Filme"
          component={Filme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
