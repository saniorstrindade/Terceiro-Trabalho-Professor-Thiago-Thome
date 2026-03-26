import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/StackNavigator';

type NavigationProp = NativeStackNavigationProp<StackParamList, 'Home'>;

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [nome, setNome] = useState('');

  const handleAdicionar = () => {
    if (!nome.trim()) return;
    navigation.navigate('AddPet', { nome });
    setNome('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do pet"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <Button title="Adicionar" onPress={handleAdicionar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
});