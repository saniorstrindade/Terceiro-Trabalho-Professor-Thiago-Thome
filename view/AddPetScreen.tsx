import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/StackNavigator';
import { usePetController } from '../controllers/PetControllers';

type NavProp = NativeStackNavigationProp<StackParamList, 'AddPet'>;

export function AddPetScreen() {
  const navigation = useNavigation<NavProp>();

  // ✅ Hook no lugar certo
  const { pets, deletarPet } = usePetController();

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>

            <Button
              title="Excluir"
              onPress={() => deletarPet(item.id)}
            />
          </View>
        )}
      />

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  nome: { fontSize: 16 },
});