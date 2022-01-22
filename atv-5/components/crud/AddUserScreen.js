import React,{useState} from 'react';
import {StyleSheet ,View, Button} from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { db, addDoc, collection } from '../../firebase/firebase-config'

const AddUserScreen =(props)=>{

    const initialState = { name:'', sobrenome:'', curso:'', ira:'' }
    const[state, setState] = useState(initialState)

    const addNewUser = async() => {
        try{
            await addDoc(collection(db, "users"), {
                name:state.name,
                sobrenome:state.sobrenome,
                curso:state.curso,
                ira:state.ira
              });
            props.navigation.navigate('ListUserScreen')
        }catch(error){
            console.log(error)
        }
    }

    const handleChangeTex = (value,name)=>{
        setState({...state,[name]:value})
    }
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.textInput}> 
                <TextInput
                    placeholder='Name'
                    value={state.name}
                    onChangeText={(value)=> handleChangeTex(value,'name')}
                />
            </View>
            <View style={styles.textInput}> 
                <TextInput
                    placeholder='Sobrenome'
                    value={state.sobrenome}
                    onChangeText={(value)=> handleChangeTex(value,'sobrenome')}
                />
            </View>
            <View style={styles.textInput}> 
                <TextInput
                    placeholder='Curso'
                    value={state.curso}
                    onChangeText={(value)=> handleChangeTex(value,'curso')}
                />
            </View>
            <View style={styles.textInput}> 
                <TextInput
                    placeholder='Ira'
                    value={state.ira}
                    onChangeText={(value)=> handleChangeTex(value,'ira')}
                />
            </View>
            <View>
                <Button title='Add User' onPress={()=> addNewUser()}/>
            </View>
            <View style={styles.spacer} />
            <View>
                <Button title='List Users' onPress={()=> props.navigation.navigate('ListUserScreen')}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    textInput:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc'
    },
    spacer: {
        marginBottom: 5
    }
})

export default AddUserScreen;
