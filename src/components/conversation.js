// Chat.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const Chat = () => {
  const [prompt, setPrompt] = useState('');
  const [conversations, setConversations] = useState([]);

  const handleSubmit = async () => {
    if (!prompt) return;
    try {
      const res = await axios.post('http://localhost:3001/chat', { prompt });
      setConversations((prevConversations) => [
        ...prevConversations,
        { question: prompt, answer: res.data.choices[0].message.content }
      ]);
      setPrompt('');
    } catch (err) {
      console.error(err);
      setConversations((prevConversations) => [
        ...prevConversations,
        { question: prompt, answer: "Erro: Não conseguiu pegar a resposta da API GPT" }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.responseContainer}>
        {conversations.map((item, index) => (
          <View key={index} style={styles.conversation}>
            <Text style={styles.question}>Pergunta: {item.question}</Text>
            <Text style={styles.answer}>Resposta: {item.answer}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4}
        value={prompt}
        onChangeText={setPrompt}
        placeholder="Enter your prompt"
      />
      <Button title="Send" onPress={handleSubmit} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  responseContainer: {
    marginTop: 20,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    padding: 10,
    maxHeight: 300,
  },
  conversation: {
    marginBottom: 15,
  },
  question: {
    fontWeight: 'bold',
  },
  answer: {
    marginTop: 5,
  },
});

export default Chat;
