import React, { useState } from "react";
import { Button, TextInput, Text, View, Image,KeyboardAvoidingView } from "react-native";
import loginStyle from "../Style/loginStyle";
import { useNavigate } from "react-router-native";


export function Login({ usuarios }) {
  const nav = useNavigate();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  function Comprobar() {
    const usuario = usuarios.find(usuario => usuario.email.toLowerCase().trim() == email?.toLowerCase().trim());
    if (usuario && usuario.password === pass && usuario.alarma == 1) {
        nav(`/alarma/${usuario.id}`);
        console.log('encontrado');
    } else {
        console.log(usuarios)
        console.log('usuario no encontrado');
    }
    if (usuario && usuario.password === pass && usuario.alarma == 0) {
        nav(`/main/${usuario.id}`);
        console.log('encontrado');
    } else {
        console.log(usuarios)
        console.log('usuario no encontrado');
    }
  }

  return (
    <KeyboardAvoidingView
    style={loginStyle.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"} // Ajusta el comportamiento según la plataforma
  >
    <View style={loginStyle.container}>
        <View style={loginStyle.box}>
        <View style={loginStyle.deco}></View>
        </View>
      <View style={loginStyle.form}>
        <Image style={loginStyle.img} source={require('../../assets/Img/Logo.png')}/>
      <Text style={loginStyle.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={'#000'}
        style={loginStyle.input}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor={'#000'}
        style={loginStyle.input}
        secureTextEntry={true}
        onChangeText={(text) => {
          setPass(text);
        }}
      />
      <Button title="Entrar" onPress={Comprobar} />
    </View>
    </View>
    </KeyboardAvoidingView>

  );
}
