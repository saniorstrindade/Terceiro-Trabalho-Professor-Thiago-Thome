import {
  View,
  Text,
  TextInput,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { usePetController } from '../controllers/PetControllers';
import { styles } from '../styles/styles';

export default function PetView() {
  const { pets, addPet, deletarPet } = usePetController();
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');

  const handleAddPet = () => {
    const nomeTrimado = nome.trim();

    if (nomeTrimado.length <= 2) {
      setErro('O nome deve ter mais de 2 caracteres.');
      return;
    }

    if (pets.some(p => p.nome === nomeTrimado)) {
      setErro('Já existe um pet com esse nome.');
      return;
    }

    setErro('');
    addPet(nomeTrimado);
    setNome('');
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/pets.jpg')}
        style={styles.topoImagem}
        resizeMode="contain"
      />

      <Text style={styles.tituloTopo}>Meus Pets 🐶</Text>

      <View style={styles.container}>
        <TextInput
          placeholder="Nome do pet"
          value={nome}
          onChangeText={(text) => {
            setNome(text);
            setErro('');
          }}
          style={styles.input}
        />

        {erro !== '' && (
          <Text style={styles.textoErro}>{erro}</Text>
        )}

        <TouchableOpacity style={styles.botaoAdd} onPress={handleAddPet}>
          <Text style={styles.botaoTexto}>Adicionar Pet</Text>
        </TouchableOpacity>

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
      </View>
    </View>
  );
}