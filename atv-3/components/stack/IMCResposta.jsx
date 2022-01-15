import React from 'react';
import {Text} from 'react-native';

const mensagem = (props) => {
    if (props.IMC<17) return <Text style={{fontSize: 18, fontWeight:'bold', color:'red'}}>Seu IMC é muito abaixo do peso</Text>
    if (props.IMC<18.49) return <Text style={{fontSize: 18, fontWeight:'bold', color:'red'}}>Seu IMC é abaixo do peso</Text>
    if (props.IMC<24.99) return <Text style={{fontSize: 18, fontWeight:'bold', color:'blue'}}>Seu IMC é peso normal</Text>
    if (props.IMC<29.99) return <Text style={{fontSize: 18, fontWeight:'bold', color:'red'}}>Seu IMC é acima do peso</Text>
    if (props.IMC<34.99) return <Text style={{fontSize: 18, fontWeight:'bold', color:'red'}}>Seu IMC é obesidade I</Text>
    if (props.IMC<39.99) return <Text style={{fontSize: 18, fontWeight:'bold', color:'red'}}>Seu IMC é obesidade I severa</Text>
    if (props.IMC>40) return <Text style={{fontSize: 18, fontWeight:'bold', color:'red'}}>Seu IMC é obesidade II mórbida</Text>
}

export default mensagem 