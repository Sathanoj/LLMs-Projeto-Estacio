import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const conversationPage = ({ navigation }) => {
  return (
    <View style={ styles.container }>
      <Text>Converse com o ChatGpt</Text>
      <Button title= 'Va para analise' onPress = { () => navigation.navigate('Inference') } />
    </View>
  )
}

export default conversationPage


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5DC',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })
