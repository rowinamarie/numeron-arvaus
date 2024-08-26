import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [number, setNumber] = useState("");
  const [result, setResult] = useState ("")
  const [guessCount, setGuessCount] = useState (0); // aloittaa laskun nollasta
  const randomNumber = Math.floor(Math.random() * 100) + 1; // generoi random numeron

  // kun painiketta painetaan
  const guessPressed = () => {
    const guessedNumber = (number) ;
    setGuessCount (guessCount + 1) // lisää yhden arvauksen lisää aina kun painiketta painaa

    if (guessedNumber < randomNumber) {
      setResult("Too low! Try again.");
    } else if (guessedNumber > randomNumber) {
      setResult("Too high! Try again.");
    } else {
      setResult(`Correct! You guessed the number in ${guessCount } guesses.`);
    }

    setNumber("");
  
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result !== null ? result : ""}</Text>
      <TextInput
      placeholder='Guess a number between 1-100'
      onChangeText={number => setNumber(number)} 
      value={number}
      keyboardType='numeric'
      />
      <Button onPress={guessPressed} title="Make guess"/>
      
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
