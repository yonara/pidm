import { useScrollToTop } from '@react-navigation/native';
import React, {useState,useEffect}from 'react';
import {StyleSheet ,View, Text, Button} from "react-native";
import {ListItem,Avatar}  from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import { db, getDocs, collection } from '../../firebase/firebase-config'

const ListUserScreen =(props)=>{

    const[users,setUsers] = useState([])

    useEffect(() => {
        listUsers()
    }, [])

    async function listUsers() {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = []

        querySnapshot.forEach((doc) => {
            const user = doc.data()
            users.push({ id: doc.id, ...user})
        });

        setUsers(users)
    }

    return (
        <ScrollView>
            <Button
            onPress={
                ()=> props.navigation.navigate('AddUserScreen')
            }
            title='Add user'
            />
            {
                users.map(
                    (user)=>{
                        return(
                            <ListItem 
                                key={user.id}
                                bottomDivider
                                onPress={
                                    ()=>{
                                        props.navigation.navigate('EditUserScreen',{userId:user.id})
                                    }
                                }
                            >
                            <Avatar
                                source={{
                                    uri:''
                                }}
                            />
                                 <ListItem.Content>
                                     <ListItem.Title>{user.name}</ListItem.Title>
                                     <ListItem.Subtitle>{user.sobrenome}</ListItem.Subtitle>
                                     <ListItem.Subtitle>{user.curso}-{user.ira}</ListItem.Subtitle>
                                 </ListItem.Content>  
                            </ListItem>                       
                             
                            )
                    }
                )
            }
        </ScrollView>
    )
}

export default ListUserScreen;

