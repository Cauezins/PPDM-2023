import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
    <Text style={styles.text} >ARIEL DE QUISSAMÃ</Text>
    <Button style={styles.button} title='cadastro' onPress={()=>{navigation.navigate('Cadastro')}}/>
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
  container: {
    flex: 1,
    backgroundColor: '#0324fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '60px',
    fontWeight: 'bold',
    color: '#ff0000'
  },
  button: {
    
  }
  
});
