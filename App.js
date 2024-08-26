import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState (null)

  const plusPressed = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult (sum)
  };

  const miinusPressed = () => {
    const difference = parseFloat(number1) - parseFloat(number2);
    setResult(difference)
  };
  



  return (
    <View style={styles.container}>
      <Text>Result: {result !== null ? result : ""}</Text>
      <TextInput
      placeholder='Anna ensimmäinen arvo'
      onChangeText={number1 => setNumber1(number1)} 
      value={number1}
      keyboardType='numeric'
      />

    <TextInput
      placeholder='Anna toinen arvo'
      onChangeText={number2 => setNumber2(number2)} 
      value={number2} 
      keyboardType='numeric'
      />

      
      <Button onPress={plusPressed} title="+"/>
      <Button onPress={miinusPressed} title="-"/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
