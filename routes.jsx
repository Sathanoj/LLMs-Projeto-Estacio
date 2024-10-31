import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import InferencePage from './src/pages/InferencePage'
import ConversationPage from './src/pages/conversationPage'

const Stack = createStackNavigator()

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = { { headerShown: false } } >
        <Stack.Screen name = "Conversation" component = { ConversationPage } />
        <Stack.Screen name = "Inference" component = { InferencePage } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default routes
