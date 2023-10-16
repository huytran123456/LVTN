import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from './screens/Intro';
import MainScreen from './screens/MainApp';

import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { globalStyles } from './public/scss/style';
import { NativeBaseProvider } from 'native-base';
import SignUpScreen from './screens/SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store/store';
import BottomTabs from './screens/partials/BottomTabs';
import CreateOrder from './screens/home/CreateOrder';
import Screen2 from './screens/home/test2';
import OrderInformation from './screens/home/orderDetail/moreDetails/OrderType';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get('window');

const App = () => {
  return (
    <View style={globalStyles.container}>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Intro" component={IntroScreen} />
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
              <Stack.Screen name="BottomTabs" component={BottomTabs} />
              <Stack.Screen name="CreateOrder" component={CreateOrder} />
              <Stack.Screen name="test2" component={Screen2} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </View>
  );
}

const appStyles = StyleSheet.create({
  bottomNavTabIcon: {
    height: 20,
    width: 20
  }
})

export default App;
