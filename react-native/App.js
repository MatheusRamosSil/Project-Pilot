import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Components/Screens/Rotas/routes'
import AppLoading from 'expo-app-loading';
import { useFonts, 
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold} from '@expo-google-fonts/inter';

import {ThemeProvider} from 'styled-components';
import { theme } from './Components/styles';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <ThemeProvider theme={theme}>
       <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
   
  );
}
