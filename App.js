import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaHome from './Componentes/TelaHome';
import TelaPerfil from './Componentes/TelaPerfil';
import TelaBusca from './Componentes/TelaBusca';
import TelaLerNoticias from './Componentes/TelaLerNoticias';
import TelaVideos from './Componentes/TelaVideos';

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component = { TelaHome }/>
        <Tabs.Screen name="Perfil" component = { TelaPerfil }/>
        <Tabs.Screen name="Busca" component = { TelaBusca }/>
        <Tabs.Screen name="LerNoticias" component = { TelaLerNoticias }/>
        <Tabs.Screen name="Videos" component = { TelaVideos }/>
      </Tabs.Navigator>
    </NavigationContainer>
  )
};
