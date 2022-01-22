import React, { useState,useEffect }from 'react';
import { StyleSheet ,View, Button} from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { db, getDoc, doc, deleteDoc, updateDoc } from '../../firebase/firebase-config';

const EditUserScreen =(props)=>{
    const initialState = { id:'',name:'',sobrenome:'',curso:'',ira:'' }
    const [user,setUser] = useState(initialState)

    useEffect(() => {
        getUserById(props.route.params.userId)
    }, [])

    const handleChangeText = (value,prop)=>{
        setUser({...user,[prop]:value})
    }
    
    const getUserById = async(id) => {
        const user = await getDoc(doc(db, "users", id))
        if (user.exists) {
            const data = user.data()
            setUser({...data, id: user.id})
        }
    }

    const deleteUser = async (id) => {
        await deleteDoc(doc(db, "users", id))
        props.navigation.navigate('ListUserScreen')
    }

    const updateUser = async () => {
        await updateDoc(doc(db, "users", user.id), {
            name:user.name,
            sobrenome:user.sobrenome,
            curso:user.curso,
            ira:user.ira
        })
        props.navigation.navigate('ListUserScreen')
    }

    return (
       <ScrollView style={styles.container}>
           <View>
                <TextInput
                    placeholder='Name'
                    style={styles.inputGroup}
                    value={user.name}
                    onChangeText={(value)=>handleChangeText(value,'name')}
                />
             
           </View>
           <View>
                <TextInput
                    placeholder='Sobrenome'
                    style={styles.inputGroup}
                    value={user.sobrenome}
                    onChangeText={(value)=>handleChangeText(value,'sobrenome')}
                />
             
           </View>
           <View>
                <TextInput
                    placeholder='Curso'
                    style={styles.inputGroup}
                    value={user.curso}
                    onChangeText={(value)=>handleChangeText(value,'curso')}
                />
                <View>
                <TextInput
                    placeholder='Ira'
                    style={styles.inputGroup}
                    value={user.ira}
                    onChangeText={(value)=>handleChangeText(value,'ira')}
                />   
           </View>
           <View>
                <Button
                    title='Update'
                    onPress={()=>updateUser()}
                />
           </View>
           </View>
           <View style={styles.btn}>
                <Button
                    title='Delete'
                    color="#E37399"
                    onPress={()=> deleteUser(user.id)}
                />
           </View>     
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35

    },
    loader:{

    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc'
    },
    btn:{
        marginTop:8
    },

})


export default EditUserScreen;
