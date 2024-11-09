import React from 'react'
import { View, Text, Button } from 'react-native'

const InferencePage = ({ navigation }) => {
  return (
    <View>
      <Text>Pagina para analise das resposta do GPT</Text>
      <Button
        title="Ir para a conversa"
        onPress={() => navigation.navigate('Conversation')}
      />
    </View>
  )
}

export default InferencePage
