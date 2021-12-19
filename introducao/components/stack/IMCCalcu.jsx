import React from "react";
import {View, Text} from 'react-native';
import Resposta from './IMCResposta';

const Calculadora = (props)=>{
    const imc = props.peso/(props.altura*props.altura)

    if(props.altura!=null && props.peso!=null)
    return(
        <View>
            <Text style={{fontSize:18}}>
                IMC: {props.peso/(props.altura*props.altura)}
            </Text>
            <Resposta IMC={imc}/>
        </View>
    )
    return null
}

export default Calculadora