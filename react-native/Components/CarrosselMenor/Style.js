import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
cardSegundo:{
    width:200,
    height:200,
    backgroundColor:'grey',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'flex-end'
  },

  cardImageSegundo:{
    position:'absolute',
    flex:1,
    borderRadius:20,
    width: 200,
    height:200,
  },
  cardTitulo:{
    position:'relative',
    height:150,
    width:200,
    flex:0.5,
    backgroundColor:'grey',
    alignItems:'center',
    justifyContent:'flex-end',
    borderRadius:20,
  },

  cardTitle:{
    position:'absolute',
    color:'#d2d2d2',
    fontSize:28,
    fontWeight:'bold',
    textTransform:'capitalize',      
  },
});

export default styles;
