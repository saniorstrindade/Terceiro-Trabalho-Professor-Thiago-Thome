import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../view/HomeScreen';
import { AddPetScreen } from '../view/AddPetScreen';

export type StackParamList = {
  Home: undefined;
  AddPet: { nome: string }; // recebe o nome digitado
};

const Stack = createNativeStackNavigator<StackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Meus Pets' }} />
      <Stack.Screen name="AddPet" component={AddPetScreen} options={{ title: 'Lista de Pets' }} />
    </Stack.Navigator>
  );
}