import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import alarmaStyle from "../Style/alarmaStyle";
import { useNavigate } from "react-router-native";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";


export function AlarmaAzul({ socket, areas }) {
    const nav = useNavigate()
  return (
    <ScrollView style={alarmaStyle.container}>
        <View style={alarmaStyle.logoContainer} onTouchStart={()=>{
            nav('/')
        }}>
            <FontAwesomeIcon icon={faDoorOpen} color="#fff" size={30} />
        </View>
        <View style={alarmaStyle.box}>
        <Text style={alarmaStyle.title}>Seleccionar Area</Text>
        </View>
        <View style={alarmaStyle.gridContainer}>
            {areas.map((area) => {
            return (
                <Text
                key={area.id}
                style={alarmaStyle.gridItem}
                onPress={() => {
                    socket.emit('alarmaAzul',area.nombre);
                }}
                >
                {area.nombre}
                </Text>
            );
            })}
        </View>
    </ScrollView>
  );
}
