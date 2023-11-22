import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return(
    <View style={styles.container}>
    <Text style={styles.text} >ARIEL DE QUISSAMÃ</Text>
    <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    <Button style={styles.button} title='cadastro' onPress={()=>{navigation.navigate('Cadastro')}}/>
    <Text>{text}</Text>
    <StatusBar style="auto" />
    </View>
  )
}
function HomeCadastro() {
  return(
    <View style={styles.container}>
    <Text style={styles.text} >ARIEL DE QUISSAMÃ -- Cadastro</Text>
    <Button style={styles.button} title='voltar' onPress={()=>{navigation.navigate('Home')}}/>
    <StatusBar style="auto" />
    </View>
  )
}



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={HomeCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  
});
