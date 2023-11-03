
import React from 'react';
import { Alert, Button, Text, View, } from 'react-native';
import * as Chama from './components/frases';

const nome : string = "teste";
export default function Print() {
  return (
    <View>
     <Button title='teste' onPress={() => Alert.alert('MSG',Chama.Componente())}/>
    </View>
  )
}

