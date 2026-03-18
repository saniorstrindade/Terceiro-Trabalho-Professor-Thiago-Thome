import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PetView from './view/PetView';

export default function App() {
  return (
    <View style={styles.container}>
      <PetView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});