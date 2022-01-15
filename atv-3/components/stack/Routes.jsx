import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Calculadora from './IMC'

const Pilha = createStackNavigator()

function Routes(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen 
                    name='Calculadora'
                    component={Calculadora}
                    options={{title:'Calculadora'}}    
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default Routes