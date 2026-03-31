import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/StackNavigator';
import { usePetController } from '../controllers/PetControllers';
import { styles } from '../styles/styles';

type NavProp = NativeStackNavigationProp<StackParamList, 'Home'>;

export function HomeScreen() {
  const navigation = useNavigation<NavProp>();
  const { addPet, pets } = usePetController();
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');

  const handleAdicionar = () => {
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
        source={require('../../assets/pets.jpg')}
        style={styles.topoImagem}
        resizeMode="cover"
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

        <TouchableOpacity style={styles.botaoAdd} onPress={handleAdicionar}>
          <Text style={styles.botaoTexto}>Adicionar Pet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoLista}
          onPress={() => navigation.navigate('AddPet')}
        >
          <Text style={styles.botaoTexto}>Ver Lista de Pets 🐾</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}