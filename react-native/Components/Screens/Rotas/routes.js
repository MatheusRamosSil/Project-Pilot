import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import Busca from '../TelaBusca/Index';
import Perfil from '../TelaPerfil/Index';
import Home from '../TelaHome/Index';
import Videos from '../TelaVideos/Index';
import Noticia from '../../../componetes/tela de noticia/index'
import { NavigationContainer } from '@react-navigation/native';


const BottomNavigation = () =>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator 
                screenOptions={{
                    tabBarStyle:{
                        position:'absolute',
                        bottom:25,
                        left:20,
                        right:20,
                        elevation:0, // tipo uma sombra abaixo da barra
                        borderRadius:15,
                        height:60,
                        backgroundColor:'#d1d1d1',
                        borderColor:'#transparent',
                        paddingBottom:5,
                        
                    },
                    tabBarActiveTintColor:'navy',
                    tabBarInactiveTintColor:'grey',
                    tabBarShowLabel: false,
                    
                }}>
                    
                <Tab.Screen 
                name = 'Home'
                component={Home}
                options={{
                    tabBarIcon:({ size, color}) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    headerShown:false
                }}
                />

                <Tab.Screen
                name = 'Busca'
                component={Busca}
                options={{
                    tabBarIcon:({ size, color}) => (
                        <Ionicons name="search" size={size} color={color} />
                    ),
                    headerShown:false
                }}
                />

                <Tab.Screen
                name = 'Banca'
                component={Videos}
                options={{
                    tabBarIcon:({ size, color}) => (
                        <Ionicons name="library" size={size} color={color} />
                    ),
                    headerShown:false
                }}
                />

                <Tab.Screen
                name = 'Perfil'
                component={Perfil}
                options={{
                    tabBarIcon:({ size, color}) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                    headerShown:false
                }}
                />    
            </Tab.Navigator>
    );
}

export default function Routes (){
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={BottomNavigation} />
          <Stack.Screen name="Noticia" component={Noticia} />
        </Stack.Navigator>
    );
}
       