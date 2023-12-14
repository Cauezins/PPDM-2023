import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, Pressable} from 'react-native';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(){
  const navigation = useNavigation();
  return(
    <View style={styles.containerHome}>
      <View style={styles.butons}>
        <Pressable onPress={()=>{navigation.navigate('Cadastro')}} style={styles.button} >
          <Text >Cadastre-se</Text>
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('Login')}} style={styles.button}>
          <Text >Login</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

function CadScreen() {
  const navigation = useNavigation();
  const [emailCad, setEmail] = React.useState('');
  const [passwordCad, setPassword] = React.useState('');
  return(
    <View style={styles.container}>
       <Image
        source={{ uri: 'https://i.imgur.com/RJEu2o9.png' }}
        style={styles.logo}
      />
      <TextInput
        placeholder="Nome completo"
        style={styles.input}
        onChangeText={(text) => {}}
      />
      <TextInput
        placeholder="Data de nascimento"
        style={styles.input}
        onChangeText={(text) => {}}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Pressable onPress={()=>{navigation.navigate('Login')}} style={styles.button}>
        <Text >Cadastre-se</Text>
      </Pressable>
      
      <Text style={styles.loginText}>Já possui uma conta?</Text>
      <Text style={styles.loginLinkText} onPress={()=>{navigation.navigate('Login')}}>Faça login</Text>

      <StatusBar style="auto" />
    </View>
  )
}

function LoginScreen() {
  const navigation = useNavigation();
  const [emailCad, setEmail] = React.useState('');
  const [passwordCad, setPassword] = React.useState('');
  return(
    <View style={styles.container}>
       <Image
        source={{ uri: 'https://i.imgur.com/RJEu2o9.png' }}
        style={styles.logo}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Pressable onPress={()=>{navigation.navigate('Tarefas')}} style={styles.button}>
        <Text>Login</Text>
      </Pressable>
      
      <Text style={styles.loginText}>Esqueceu a senha?</Text>
      <Text style={styles.loginLinkText} onPress={()=>{navigation.navigate('Esqueci a senha')}}>Esqueci a senha</Text>
      
      <Text style={styles.loginText}>Não possui uma conta?</Text>
      <Text style={styles.loginLinkText} onPress={()=>{navigation.navigate('Cadastro')}}>Cadastre-se</Text>
      <StatusBar style="auto" />
    </View>
  )
}

function RecSenhaScreen() {
  const navigation = useNavigation();
  const [emailRec, setEmail] = React.useState('');
  const [passwordRec, setPassword] = React.useState('');
  const [codigoRec, setCodigo] = React.useState('');
  return(
    <View style={styles.container}>
       <Image
        source={{ uri: 'https://i.imgur.com/RJEu2o9.png' }}
        style={styles.logo}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Nova Senha"
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        placeholder="Codigo de confirmação"
        style={styles.input}
        onChangeText={setCodigo}
      />
      
      <Pressable onPress={()=>{navigation.navigate('Login')}} style={styles.button}>
        <Text >Trocar Senha</Text>
      </Pressable>
    </View>
  )
}

function TarefasScreen() {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <Text>ENTROUUU</Text>
    </View>
  )
}



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Esqueci a senha" component={RecSenhaScreen} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 containerHome: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: "flex-end",
  borderWidth: 1,
},
 logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
 },
 butons: {
  width: '80%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "space-around",
  marginBottom: 20
 },
 button: {
  width: 190,
  height: 40,
  borderWidth: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
 },
 input: {
    width: '80%',
    height: '40px',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
 },
 loginText: {
    marginTop: 30,
 },
 loginLinkText: {
    color: 'blue',
    marginTop: 10,
 },
  
});
