import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default class Cadastro extends Component{
    constructor(props){
        super(props)
        this.state = { nome:null, idade:null, email: null }
    }

    acaoBotao = () => {
        const { nome, idade, email } = this.state
        if (nome == null || idade == null || email == null){
            return
        }

        this.props.navigation.navigate('Modal', {
            nome: this.state.nome,
            idade: this.state.idade,
            email: this.state.email
        })
    }

    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>
                    Cadastro
                </Text>
                <TextInput
                    style={estilos.texto}
                    placeholder="Digite seu nome"
                    onChangeText={(nome)=> this.setState({nome:nome})}/>
                
                <TextInput
                    style={estilos.texto}
                    placeholder="Digite a sua idade"
                    keyboardType="decimal-pad"
                    onChangeText={(idade)=> this.setState({idade:idade})}
                />
                <TextInput
                    style={estilos.texto}
                    placeholder="Digite o seu email"
                    onChangeText={(email)=> this.setState({email:email})}
                />
                <View style={estilos.botao}>
                    <Button 
                    title= 'Ok'
                    onPress={this.acaoBotao}
                    />
                </View>
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
        texto:{
            height:45,
            width:'70%',
            borderColor:'gray',
            borderWidth:2,
            paddingLeft: 20,
            margin: 3,
        },
        botao:{
            width:'70%',
            margin:7
        },
    },
)