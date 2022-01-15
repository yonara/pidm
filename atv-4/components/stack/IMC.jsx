import React, {Component} from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import CalculoIMC from './IMCCalcu'

export default class Calculadora extends Component{
    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, apertou: false}
    }

    acaoBotao = () => {
        if (this.state.altura!= null && this.state.peso!= null){
            this.setState({apertou:true})
        }
    }

    renderizarConta(){
        if(this.state.apertou){
            return(
                <CalculoIMC altura={this.state.altura} peso={this.state.peso}/>
            )
        }
        return null
    }

    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>
                    Calculadora de IMC
                </Text>
                <TextInput
                    style={estilos.altura}
                    placeholder="Digite a altura"
                    keyboardType="decimal-pad"
                    onChangeText={(altura)=> this.setState({altura:altura})}/>
                
                <TextInput
                    style={estilos.peso}
                    placeholder="Digite o peso"
                    onChangeText={(peso)=> this.setState({peso:peso})}
                />
                <View style={estilos.botao}>
                    <Button 
                    title= 'Calcular IMC'
                    onPress={this.acaoBotao}
                    />
                </View>

                {this.renderizarConta()}
            </View>
        )
    }
}

const estilos = StyleSheet.create (
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: '#e5e5e5'
        },
        cabecalho:{
            fontSize:24,
            fontWeight: "bold",
            margin:15,
        },
        altura:{
            height:45,
            width:'70%',
            borderColor:'gray',
            borderWidth:2,
            paddingLeft: 20,
            margin: 3,
        },
        peso:{
            height:45,
            width:'70%',
            borderColor:'gray',
            borderWidth: 2,
            paddingLeft: 20,
            margin: 3
        },
        botao:{
            width:'70%',
            margin:7
        },
    },
)