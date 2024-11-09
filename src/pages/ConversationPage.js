import React from 'react'
import { StyleSheet, View, Text, Button, Pressable } from 'react-native'
import Chat from '../components/conversation'

const ConversationPage = ({ navigation }) => {
  return (
    <View style={ styles.container }>
        <Text>Converse com o ChatGpt</Text>
        <View style={{ height: 800 }}>
            <Chat />
        </View>
        <Pressable 
          title= 'Va para analise' onPress = { () => navigation.navigate('Inference') }>
            Va para analise
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ConversationPage