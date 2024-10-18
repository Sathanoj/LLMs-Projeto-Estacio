import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Chat = () => {
  const [prompt, setPrompt] = useState('');
  const [conversations, setConversations] = useState([]);

  const handleSubmit = async () => {
    
    if (!prompt) return;
    try {
      const res = await axios
        .post('http://localhost:3001/chat', { prompt })
        console.log('resposta da API: ', res)
          setConversations((prev) => [
           ...prev,
           {question: res.data.question, answer: res.data.answer, date: res.data.date}
         ])

      setPrompt('');
    } catch (err) {
      console.error(err);
      setConversations((prevConversations) => [
        ...prevConversations,
        { question: prompt, answer: "Erro: Não conseguiu pegar a resposta da API GPT" }
      ]);
    }
  };

  const getAllConversation = async (res) => {
    res = await axios
    .get('http://localhost:3001/fullconversation')
    .then((response) => {
      console.log(response)
      return setConversations(response.data)
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.responseContainer}>
        {conversations.map((item, index) => (
          <View key={index} style={styles.conversation}>
            <Text style={styles.question}>Pergunta: <Text>{item.question}</Text></Text>
            <Text style={styles.answer}>Resposta: <Text>{item.answer}</Text></Text>
            <Text>Data: {item.date}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4}
        value={prompt}
        onChangeText={setPrompt}
        placeholder="Sobre o que vamos conversar?"
      />
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={handleSubmit}>
          <Text style={styles.text}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={getAllConversation}>
          <Text style={styles.text}>listar</Text>
        </TouchableOpacity>
      </View>       
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
    // height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFAF0'
  },
  responseContainer: {
    marginTop: 20,
    backgroundColor: '#FFFAF0',
    borderRadius: 5,
    padding: 10,
    // maxHeight: 200,
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
  input: {
    margin: 10,
    marginTop: 0,
    padding: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    width: '80%',
  },
  btn: {
    width: '40%',
    height: 40,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: '#eb5e28',
    borderStyle: 'solid',
    borderColor: '#eb5e28',
    borderRadius: 5,
    margin: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
});

export default Chat;
