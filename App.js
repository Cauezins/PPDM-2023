import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >ARIEL DE QUISSAMÃ</Text>
      <StatusBar style="auto" />
    </View>
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
  }
  
});
