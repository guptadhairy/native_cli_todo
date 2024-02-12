import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Footer = () => {
    const navigation = useNavigation();
  return (
    <View style={Styles.footer}>
      <TouchableOpacity onPress={()=> navigation.navigate("home")}>
      <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("profile")}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("onboarding")}>
        <Text>Onboard</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const Styles = StyleSheet.create({
    footer: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})