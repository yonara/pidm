import React, {Component} from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class Modal extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.texto}>Nome:{this.props.route.params.nome}</Text>
                <Text style={estilos.texto}>Idade:{this.props.route.params.idade}</Text>
                <Text style={estilos.texto}>E-mail:{this.props.route.params.email}</Text>
                <Button 
                    title='Home'
                    onPress={()=>this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    texto:{
        fontSize:24,
        fontWeight:'bold',
        fontFamily:'Arial',
        marginBottom: 10
    }
})