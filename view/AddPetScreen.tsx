import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { usePetController } from '../controllers/PetControllers';
import { styles } from '../styles/styles';

export function AddPetScreen() {
  const { pets, deletarPet } = usePetController();

  return (
    <View style={styles.container}>
      {pets.length === 0 ? (
        <Text style={styles.semPets}>Nenhum pet cadastrado ainda 🐾</Text>
      ) : (
        <FlatList
          data={pets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.nomePet}>{item.nome}</Text>
              <TouchableOpacity
                style={styles.botaoExcluir}
                onPress={() => deletarPet(item.id)}
              >
                <Text style={styles.botaoTexto}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}