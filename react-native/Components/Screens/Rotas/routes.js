import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import Busca from '../TelaBusca/Index';
import Perfil from '../TelaPerfil/Index';
import Home from '../TelaHome/Index';
import Videos from '../TelaVideos/Index';
import noticia from '../../../componetes/tela de noticia/index'




const Tab = createBottomTabNavigator();
export default function Routes (){
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
                
                <Tab.Screen name = 'noticia' component={noticia}/>
               </Tab.Navigator>
                

           
       
    )
}