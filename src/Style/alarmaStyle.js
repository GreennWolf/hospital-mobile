import { StyleSheet,Dimensions} from 'react-native';
import Constants from 'expo-constants'


const alarmaStyle = StyleSheet.create({
    container: { 
        marginTop:50,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    box:{
        width:300,
        padding:10,
        marginLeft:40,
        backgroundColor:'rgb(35, 137, 253)',
        borderRadius:7,
        borderWidth:2,
        borderBottomWidth:0,
    },

    title:{
        fontSize:25,
        color:'#ffff',
        textAlign:'center',
    },

    areas:{
        borderWidth:1,
        borderColor:'#000',
        width:100,
        height:80,
        textAlign:'center',
        textAlignVertical:'center',
    },

    gridContainer: {
        marginLeft:10,
        marginRight:10,
        backgroundColor:'rgb(35, 137, 253)',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between", // Controla el espaciado entre elementos
        paddingHorizontal: 16, // Espacio horizontal alrededor de la cuadrícula
        borderWidth:2,
      },
      gridItem: {
        backgroundColor:'#ffff',
        width: "48%", // Ancho de cada elemento (ajusta según tus necesidades)
        marginVertical: 8, // Espaciado vertical entre elementos
        padding: 12, // Espaciado interno de cada elemento
        borderWidth: 2, // Borde para cada elemento (ajusta según tus necesidades)
        borderColor: "#000", // Color del borde
        borderRadius:6,
        textAlign:'center',
        color:'#000',
      },
      
      logoContainer:{
        width:50,
        height:50,
        backgroundColor:'#c7d6d6',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    },
});
  

export default alarmaStyle