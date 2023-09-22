import { StyleSheet,Dimensions} from 'react-native';
import Constants from 'expo-constants'


const loginStyle = StyleSheet.create({
    container: {
        position:'absolute',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height + 25,
        alignItems:'center',
        backgroundColor:'rgb(14, 196, 211)',
        display:'flex',
        justifyContent:'center',
    },

    title:{
        textAlign:'center',
        fontSize:35,
        margin:20,
    },

    img:{
        width:100,
        height:100,
        objectFit:'contain'
    },

    input:{
        fontSize:20,
        margin:20,
        borderWidth:0,
        borderBottomWidth:2,
        borderColor:'#000',
        textAlign:'center',
        width:Dimensions.get('window').width - 150,
    },

    form:{
        width:Dimensions.get('window').width - 40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff',
        height:450,
        borderWidth:2,
        borderColor:'#000',

    },

    box:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        top:35,
        width:150,
        height:70,
        backgroundColor:'#c7d6d6',
        borderWidth:2,
        borderColor:'#000',
        zIndex:1,
    },

    deco:{
        width:80,
        height:25,
        backgroundColor:'#000',
    },



});
  

export default loginStyle