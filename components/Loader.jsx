import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

const Loader = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
      <ActivityIndicator size={100} animating={true}/>
    </View>
  )
}

export default Loader