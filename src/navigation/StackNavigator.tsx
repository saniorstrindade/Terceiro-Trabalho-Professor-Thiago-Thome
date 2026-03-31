import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../view/HomeScreen';
import { AddPetScreen } from '../view/AddPetScreen';

export type StackParamList = {
  Home: undefined;
  AddPet: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Adicionar Pet',
          headerStyle: { backgroundColor: '#007bff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="AddPet"
        component={AddPetScreen}
        options={{
          title: 'Lista de Pets',
          headerStyle: { backgroundColor: '#007bff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Stack.Navigator>
  );
}