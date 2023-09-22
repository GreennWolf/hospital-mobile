import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { io } from 'socket.io-client';
import { Login } from './src/Components/Login';
import config from './src/Config/settings.json'
import { useState,useEffect } from 'react';
import { Main } from './src/Components/Main';
import { AlarmaAzul } from './src/Components/AlarmaAzul';


export default function App() {
  const [ip,setIp] = useState(`http://${config[0].ip}:${config[0].puerto}`)
  // console.log(ip)
  const socket = io(ip)
  const [usuarios,setUsuarios] = useState([])
  const [fichas,setFichas] = useState([])
  const [areas,setAreas] = useState([])
  const [cargos,setCargos] = useState([])
  const [obrasSociales , setObrasSociales] = useState([])
  const [tipos , setTipos] = useState([])
  const [personalAreas,setPersonalAreas] = useState([])
  const [pacienteEnfermedad,setPacienteEnfermedad] = useState([])
  const [enfermedades,setEnfermedades] = useState([])
  const [zonas,setZonas] = useState([])
  const [llamados,setLlamados] = useState([])

  useEffect(()=>{
    getUsuarios()
    getPaciente()
    getAreas()
    getCargos()
    getObrasSociales()
    getTipos()
    getZonas()
    getPacienteEnfermedad()
    getEnfermedades()
    getPersonalAreas()
    getLlamados()

    socket.on('update',()=>{
      getUsuarios()
      getPaciente()
      getAreas()
      getCargos()
      getObrasSociales()
      getEnfermedades()
      getTipos()
      getZonas()
      getPacienteEnfermedad()
      getPersonalAreas()
      getLlamados()
    })

    return ()=>{
      socket.off('update')
    }

  },[])

  async function getUsuarios(){
    try{
        socket.emit('getUsuarios')
        
        await socket.on('getUsuarios',(usuarios)=>{
        setUsuarios(usuarios)
        // console.log(usuarios)
        })
        // 
        
    }catch (error){
        
        getUsuarios()
    }
  }

  async function getPaciente(){
    try{
        socket.emit('getPacientes')
        
        await socket.on('getPacientes',(Fichas)=>{
        setFichas(Fichas)
        // console.log(Fichas)
        })
        // 
        
    }catch (error){
        
        getPaciente()
    }
  }

  async function getAreas(){
    try{
        socket.emit('getAreas')
        
        await socket.on('getAreas',(Areas)=>{
        setAreas(Areas)
        // console.log(Areas)
        })
        // 
        
    }catch (error){
        
        getAreas()
    }
  }

  async function getCargos(){
    try{
        socket.emit('getCargos')
        
        await socket.on('getCargos',(Cargos)=>{
        setCargos(Cargos)
        // console.log(Cargos)
        })
        // 
        
    }catch (error){
        
        getCargos()
    }
  }

  async function getObrasSociales(){
    try{
        socket.emit('getObraSocial')
        
        await socket.on('getObraSocial',(ObrasSociales)=>{
        setObrasSociales(ObrasSociales)
        // console.log(ObrasSociales)
        })
        // 
        
    }catch (error){
        
        getObrasSociales()
    }
  }

  async function getTipos(){
    try{
        socket.emit('getTipos')
        
        await socket.on('getTipos',(Tipos)=>{
        setTipos(Tipos)
        // console.log(Tipos)
        })
        // 
        
    }catch (error){
        
        getTipos()
    }
  }

  async function getEnfermedades(){
    try{
        socket.emit('getEnfermedades')
        
        await socket.on('getEnfermedades',(Enfermedades)=>{
        setEnfermedades(Enfermedades)
        // console.log(Enfermedades)
        })
        // 
        
    }catch (error){
        
        getAreas()
    }
  }

  async function getPacienteEnfermedad(){
    try{
        socket.emit('getPacienteEnfermedad')
        
        await socket.on('getPacienteEnfermedad',(PacienteEnfermedad)=>{
        setPacienteEnfermedad(PacienteEnfermedad)
        // console.log(PacienteEnfermedad)
        })
        // 
        
    }catch (error){
        
        getPacienteEnfermedad()
    }
  }

  async function getPersonalAreas(){
    try{
        socket.emit('getPersonalAreas')
        
        await socket.on('getPersonalAreas',(PersonalAreas)=>{
        setPersonalAreas(PersonalAreas)
        // console.log(PersonalAreas)
        })
        // 
        
    }catch (error){
        
        getPersonalAreas()
    }
  }

  async function getZonas(){
    try{
        socket.emit('getZonas')
        
        await socket.on('getZonas',(Zonas)=>{
        setZonas(Zonas)
        // console.log(Zonas)
        })
        // 
        
    }catch (error){
        
        getZonas()
    }
  }

  async function getLlamados(){
    try{
        socket.emit('getLlamados')
        
        await socket.on('getLlamados',(Llamados)=>{
        setLlamados(Llamados)
        // console.log(Zonas)
        })
        // 
        
    }catch (error){
        
        getLlamados()
    }
  }

  return (
    <NativeRouter>
      {/* <StatusBar style="auto" /> */}
      <Routes>
        <Route path='/' element={<Login usuarios={usuarios}/>}/>
        <Route path='/main/:id' element={<Main llamados={llamados} socket={socket} enfermedades={enfermedades} pacienteEnfermedad={pacienteEnfermedad} obrasSociales={obrasSociales} zonas={zonas} areas={areas} fichas={fichas} tipos={tipos} usuarios={usuarios}/>}/>
        <Route path='/alarma/:id' element={<AlarmaAzul socket={socket} areas={areas}/>}/>
      </Routes>
    </NativeRouter>
  );
}

