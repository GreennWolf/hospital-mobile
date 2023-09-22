import { StyleSheet,Dimensions} from 'react-native';
import Constants from 'expo-constants'


const mainStyle = StyleSheet.create({
    container: {
        marginTop:50,
        position:'absolute',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        alignItems:'center',
    },
    
    box:{
        padding:10,
        backgroundColor:'rgb(35, 137, 253)',
        borderRadius:7,
    },

    title:{
        fontSize:25,
        color:'#ffff',
    },

    table:{
        width:Dimensions.get('window').width,
    },

    trH:{
        marginTop:10,
        width:Dimensions.get('window').width,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'rgb(14, 196, 211)',
        
    },

    trB:{
        width:Dimensions.get('window').width,
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row',
    },

    th:{
        width:Dimensions.get('window').width / 4,
        fontWeight:'bold',
        textAlign:'center'
    },

    td:{
        width:Dimensions.get('window').width / 4,
        height:50,
        textAlignVertical:'center',
        color:'#000',
        textAlign:'center',
        borderWidth:0.5,
        borderColor:'#000',
    },

    modalClose:{
        width:50,
        height:50,
        fontSize:30,
        position:'absolute',
        right:10,
        top:10,
        color:'red',
    },

    modalBtn:{
        margin:40,
        backgroundColor:'blue',
        marginTop:20,
        height:70,
    },

    modalBtnText:{
        height:70,
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
    },

    modalName:{
        textAlign:'center',
        fontSize:30,
        marginTop:50,
    },
    modalDni:{
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },
    modalEmail:{
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },
    modalNac:{
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },
    modalGF:{
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },
    modalOS:{
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },
    modalCarnet:{
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },
    modalArea:{
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },
    modalEnfermedades:{
        fontSize:30,
        marginTop:20,
        textAlign:'center',
    },

    modalEnfermedadesContainer:{
        height:100,
    },

    pacienteEnfermedad:{
        fontSize:20,
        textAlign:'center',
    },

    inputText:{
        borderWidth:1,
        borderColor:'#000',
        height:100,
        margin:10,
        textAlign:'center',
        borderRadius:5,
    },

    logoContainer:{
        width:50,
        height:50,
        position:'absolute',
        left:5,
        backgroundColor:'#c7d6d6',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    },
});
  

export default mainStyle