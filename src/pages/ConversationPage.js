import React from 'react'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import Chat from '../components/conversation'

const ConversationPage = ({ navigation }) => {
  return (
    <View style={ styles.container }>
        <Text>Converse com o ChatGpt</Text>
        <Button title= 'Va para analise' onPress = { () => navigation.navigate('Inference') } />
        <View>
          <ScrollView>
            <Chat />
          </ScrollView>
        </View>
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