import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Button, Avatar } from 'react-native-paper'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/action'

const Signup = ({navigation}) => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const submitHandler = async() => {
    await dispatch(register(name,email,password));
    navigation.navigate("verify");
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
      <View style={{
      backgroundColor: "#365486",
      alignItems: "center",
      justifyContent: "center",
      flex: 1
    }}>
      <View>
        <Image style={Styles.image} source={require("../assets/signup.png")} />
      </View>
      <View style={Styles.container}>
        <Text style={Styles.heading}>Create Account </Text>
        <TextInput style={Styles.input} placeholder='Name' value={name} onChangeText={setName}/>
        <TextInput style={Styles.input} placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput style={Styles.input} placeholder='Password' value={password} onChangeText={setPassword}/>
        <Button disabled={!email || !name || !password}style={Styles.btn} onPress={submitHandler}>
          <Text style={{color: "white"}}>Sign Up</Text>
        </Button>
        <View style={{flexDirection: "row"}}>
        <Text>
          Already have an account? 
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={{fontWeight: "bold"}}> Log In</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  )
}

export default Signup

const Styles = StyleSheet.create({
  image: {
    width: 350,
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
  avatar: {
    height: 60,
    width: 60,
  }

})