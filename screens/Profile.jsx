import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout, updateProfile } from '../redux/action';
import { Button } from 'react-native-paper';
import Loader from '../components/Loader';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.auth);


  const logoutHandler = async()=> {
    await dispatch(logout());
  }

  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{fontWeight: "bold", fontSize: 20}}>{user.name}</Text>
        <Button style={{backgroundColor: "blue", width: "70%", marginTop: 10}} onPress={logoutHandler}>
          <Text style={{color: "white"}}>Logout</Text>
        </Button>
      </View>
    
  )
}

export default Profile