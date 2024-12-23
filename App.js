import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import ChatScreen from './src/screens/ChatScreen';
import './src/firebase/config';

const Stack = createStackNavigator();

// Emergency Drone Service App - Main Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen 
          name="Chat" 
          component={ChatScreen}
          options={{
            title: 'Team Chat',
            headerLeft: null, // Prevents going back to login
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 