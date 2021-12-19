import Home from './Home'
import About from './About'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Modal from './Modal'
import Calculadora from './IMC'

// Com Modal
const PilhaDasTelas = createStackNavigator()
const PilhaRaiz = createStackNavigator()

// As telas usuais do meu sistema (Home e About)
function FuncaoPilhaDasTelas(){
    return(
        <PilhaDasTelas.Navigator
            initialRouteName='Home'
        >
            <PilhaDasTelas.Screen 
            name='Home'
            component={Home}
            options={{title:'Tela Inicial'}}/>
            <PilhaDasTelas.Screen 
            name='About'
            component={About}
            options={{title:'Sobre'}}/>
            <PilhaDasTelas.Screen 
            name='imc'
            component={Calculadora}
            options={{title:'IMC'}}/>
        </PilhaDasTelas.Navigator>
    )
}
// A função de pilha anterior + a tela modal que ficará por cima da pilha anterior
function FuncaoPilhaRaiz(){
    return(
        <NavigationContainer>
            <PilhaRaiz.Navigator>
                <PilhaRaiz.Screen 
                    name='Principal'
                    component={FuncaoPilhaDasTelas}
                    options={{headerShown:false}}
                />
                <PilhaRaiz.Screen 
                    name='Modal'    
                    component={Modal}
                />
            </PilhaRaiz.Navigator>
        </NavigationContainer>
    )
}

export default FuncaoPilhaRaiz

//Sem Modal
/*const Pilha = createStackNavigator()

function Routes(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen 
                    name='Home'
                    component={Home}
                    options={{title:'Tela Inicial'}}    
                />
                <Pilha.Screen 
                    name='About'
                    component={About}  
                    options={{title:'Sobre'}}      
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default Routes*/