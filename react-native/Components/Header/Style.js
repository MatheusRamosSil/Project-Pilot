import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    logo:{
        height:100,
        width:150,
    },
    header:{
        marginTop: 40,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15,
      },
    card:{
        backgroundColor: "#d2d2d2",
        borderRadius:30,
      }
    });

export default styles