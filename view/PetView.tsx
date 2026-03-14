import { View, Text, TextInput, Button, FlatList } from "react-native";
import { useState } from "react";
import { usePetController } from "../controllers/PetControllers";

export default function PetView() {

  const { pets, addPet } = usePetController();
  const [nome, setNome] = useState("");

  const handleAddPet = () => {
    if (!nome.trim()) return;
  
    addPet(nome);
    setNome("");
  };

  return (
    <View>

<Text style={{ fontSize: 20, marginBottom: 10 }}>
  Lista de Pets
</Text>

      <TextInput
        placeholder="Nome do pet"
        value={nome}
        onChangeText={setNome}
      />

      <Button title="Adicionar Pet" onPress={handleAddPet} />

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.nome}</Text>
        )}
      />

    </View>
  );
}