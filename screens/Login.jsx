import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/action'

const Login = ({navigation}) => {

  const {error} = useSelector(state=>state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async() => {
    await dispatch(login(email, password));
    navigation.navigate("home")
  }
  useEffect(()=>{
    if(error) {
      dispatch({type: "clearError"})
    }
  },[dispatch,error])
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
      <View style={{
      backgroundColor: "#365486",
      alignItems: "center",
      justifyContent: "center",
      flex: 1
    }}>
      <View>
        <Image style={Styles.image} source={require("../assets/welcome.png")} />
      </View>
      <View style={Styles.container}>
        <Text style={Styles.heading}>Welcome </Text>
        <TextInput style={Styles.input} placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput style={Styles.input} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry/>
        <TouchableOpacity style={Styles.forget} onPress={()=> navigation.navigate("forget")}>
          <Text style={{fontWeight: "bold"}}>Forget Password?</Text>
        </TouchableOpacity>
        <Button style={Styles.btn} onPress={submitHandler}>
          <Text style={{color: "white"}}>Log In</Text>
        </Button>
        <View style={{flexDirection: "row"}}>
        <Text>
          Not having an account? 
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text style={{fontWeight: "bold"}}> Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const Styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold"
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: "#7FC7D9",
    borderRadius: 10,
    padding: 10
  },
  forget: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%"
  },
  btn: {
    backgroundColor: "#365486",
    padding: 10,
    width: "60%"
  },

})