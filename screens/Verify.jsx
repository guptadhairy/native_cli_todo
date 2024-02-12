import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { verify } from '../redux/action';

const Verify = () => {
    const dispatch = useDispatch();

    const [otp, setOtp] = useState();
    const handleSubmit = ()=> {
        dispatch(verify(otp));
    }
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
      <TextInput style={{
        backgroundColor: "gray", width: "70%", color: "white", borderRadius: 10, padding: 10, height: 50
      }} placeholder='Otp' value={otp} onChangeText={setOtp} />
      <Button style={{backgroundColor: "purple", padding: 10, width: "70%", marginTop: 10}} onPress={handleSubmit}>
        <Text style={{color: "white"}}>Verify</Text>
      </Button>
    </View>
  )
}

export default Verify