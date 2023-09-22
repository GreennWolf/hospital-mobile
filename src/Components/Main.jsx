import React, { useEffect, useState } from "react";
import { View,Text, Modal, Button, TextInput } from "react-native";
import { useNavigate, useParams } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import mainStyle from "../Style/mainStyle";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

export function Main({llamados,usuarios,pacienteEnfermedad,fichas,areas,tipos,zonas,obrasSociales,enfermedades,socket}){

    const {id} = useParams()
    const [modal,setModal] = useState(false)
    const [llamadoTouched , setLlamadoTouched] = useState()
    const [llamadoSelected,setLlamadoSelected] = useState()
    const [pacienteSelected,setPacienteSelected] = useState()
    const [obraSocial,setObraSocial] = useState()
    const [nacimiento , setNacimiento] = useState()
    const [area,setArea] = useState()
    const [observaciones,setObservaciones] = useState()
    const nav = useNavigate()

    useEffect(()=>{
        const llamado = llamados.find(llamado => llamado.id == llamadoTouched)
        if(llamado != undefined){
            const paciente = fichas.find(paciente => paciente.id == llamado.idpaciente)
            const os = obrasSociales.find(os => os.id == paciente.idobra_social)
            const a = areas.find(a => a.id == paciente.idarea)
            setPacienteSelected(paciente)
            setLlamadoSelected(llamado)
            setObraSocial(os)
            setArea(a)
            transformarFechaYAsignar(paciente.nacimiento)
            
        }
    },[llamadoTouched])

    function transformarFechaYAsignar(fechaOriginal) {
        // Crear un objeto de fecha a partir de la cadena original
        const fecha = new Date(fechaOriginal);
      
        // Obtener componentes de fecha (año, mes y día)
        const año = fecha.getFullYear();
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 al mes ya que en JavaScript los meses van de 0 a 11
        const dia = fecha.getDate().toString().padStart(2, '0');
      
        // Formatear la fecha en el formato válido para el input date
        const fechaFormateada = `${dia}/${mes}/${año}`;
        setNacimiento(fechaFormateada)
      }

    return <View style={mainStyle.container}>
        <View style={mainStyle.logoContainer} onTouchStart={()=>{
            nav('/')
        }}>
            <FontAwesomeIcon icon={faDoorOpen} color="#fff" size={30} />
        </View>
        <View style={mainStyle.box}>
        <Text style={mainStyle.title}>Llamados Pendientes</Text>
        </View>
        <View style={mainStyle.table}>
            <View style={mainStyle.trH}>
                <Text style={mainStyle.th}>Nombre</Text>
                <Text style={mainStyle.th}>Apellido</Text>
                <Text style={mainStyle.th}>Area</Text>
                <Text style={mainStyle.th}>Tipo</Text>
            </View>
        {
            llamados.map(llamado =>{
                const paciente = fichas.find(paciente => paciente.id == llamado.idpaciente)
                const area = areas.find(area => area.id == llamado.idarea)
                const tipo = tipos.find(tipo => tipo.id == llamado.idtipo)
                if(paciente.idpersonal == id && llamado.horario_atencion == null){
                    return <View style={mainStyle.trB} key={llamado.id} onTouchStart={()=>{
                        setLlamadoTouched(llamado.id)
                        setModal(!modal)
                    }}>
                        <Text style={mainStyle.td}>{paciente.nombre}</Text>
                        <Text style={mainStyle.td}>{paciente.apellido}</Text>
                        <Text style={mainStyle.td}>{area.nombre}</Text>
                        <Text style={mainStyle.td}>{tipo.nombre}</Text>
                    </View>
                }
            })
        }
        </View>
        <Modal style={mainStyle.container} visible={modal}>
            <Text style={mainStyle.modalClose} onPress={()=>{
                setModal(!modal)
            }}>X</Text>
            
            <Text style={mainStyle.modalName}>{pacienteSelected?.nombre + ' ' + pacienteSelected?.apellido}</Text>
            <Text style={mainStyle.modalDni}>DNI:{pacienteSelected?.dni}</Text>
            <Text style={mainStyle.modalEmail}>Email:{pacienteSelected?.email}</Text>
            <Text style={mainStyle.modalNac}>Fecha de Nacimiento:{nacimiento}</Text>
            <Text style={mainStyle.modalGF}>Grupo y Factor :{pacienteSelected?.grupo_sanguineo + ' ' + pacienteSelected?.factor_sanguineo }</Text>
            <Text style={mainStyle.modalOS}>Obra Social:{obraSocial?.nombre}</Text>
            <Text style={mainStyle.modalCarnet}>Carnet:{pacienteSelected?.carnet}</Text>
            <Text style={mainStyle.modalArea}>Area:{area?.nombre}</Text>
            <Text style={mainStyle.modalEnfermedades}>Enfermedades Cronicas</Text>
            <View style={mainStyle.modalEnfermedadesContainer}>
                {
                    pacienteEnfermedad.map(pe =>{
                        if(pe.idpaciente == pacienteSelected?.id){
                            const enfermedad = enfermedades.find(enfermedad => enfermedad.id == pe.idenfermedad)
                            return <Text key={pe.id} style={mainStyle.pacienteEnfermedad}>{enfermedad.nombre}</Text>
                        }
                    })
                }
            </View>
            <TextInput onChangeText={(text)=>{
                setObservaciones(text)
            }} style={mainStyle.inputText} placeholder="Observaciones"/>
            <View style={mainStyle.modalBtn} onTouchStart={()=>{
                let idpaciente = pacienteSelected?.id
                let idtipo = llamadoSelected?.idtipo
                let idarea = llamadoSelected?.idarea
                let idzona = llamadoSelected?.idzona
                let horario_llamada = llamadoSelected?.horario_llamada
                const fechaActual = new Date();
                // Formatear la fecha en el formato deseado (por ejemplo, "YYYY-MM-DDTHH:MM:SS")
                const horario_atencion = fechaActual.toISOString().slice(0, 19).replace('T', ' ');
                const data = { id:llamadoTouched,idpaciente ,idtipo, idarea ,idzona,horario_llamada,horario_atencion,observaciones} ;
                socket.emit('editLlamado',data)
                setModal(!modal)
            }}><Text style={mainStyle.modalBtnText}>CONFRIMAR ATENCION</Text></View>
        </Modal>
    </View>
}