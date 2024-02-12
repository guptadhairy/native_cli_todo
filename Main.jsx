
import React, { Profiler, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './screens/Onboarding';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Forget from './screens/Forget';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/action';
import Verify from './screens/Verify';
import { Text } from 'react-native-paper';
import Loader from './components/Loader';
import Profile from './screens/Profile';
import Footer from './components/Footer';


const Stack = createNativeStackNavigator();
const Main = () => {
  const dispatch = useDispatch();

  const {isAuthenticated, loading} = useSelector(state=>state.auth);
  useEffect(()=>{
     dispatch(loadUser());
     console.log(isAuthenticated);
  },[dispatch, isAuthenticated]);
  return (
    loading ? <Loader />: 
    <NavigationContainer>
        <Stack.Navigator initialRouteName={isAuthenticated ? 'home' : 'login'}>
            <Stack.Screen name='home' component={Home} options={{headerTitle: "Todo List"}}/>
            <Stack.Screen name='onboarding' component={OnboardingScreen}  options={{headerShown: false}}/>
            <Stack.Screen name='signup' component={Signup} options={{headerShown: false}}/>
            <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='forget' component={Forget} />
            <Stack.Screen name='verify' component={Verify} />
            <Stack.Screen name='profile' component={Profile}/>
        </Stack.Navigator>
        {isAuthenticated && <Footer />}
    </NavigationContainer>
  )
}

export default Main