import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const OnboardingScreen = ({navigation}) => {
  const handleDone = () => {
    navigation.navigate('home')
  };

  return (
    <View style={{
        flex: 1,
    }}>
      <Onboarding onDone={handleDone} onSkip={handleDone}
    pages={[
    {
      backgroundColor: '#D4E7C5',
      image: <LottieView style={Styles.vdo} source={require('../assets/animation.json')} autoPlay loop />,
      title: "Hey There",
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#6962AD',
        image: <LottieView style={Styles.vdo} source={require('../assets/ani2.json')} autoPlay loop />,
        title: 'Dhairya',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#83C0C1',
        image: <LottieView style={Styles.vdo} source={require('../assets/ani3.json')} autoPlay loop />,
        title: 'Here',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>
    </View>
  )
}

export default OnboardingScreen

const Styles = StyleSheet.create({
    vdo: {
        width: 300,
        height: 300,
    }
})