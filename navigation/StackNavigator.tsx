import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../view/HomeScreen';
import { AddPetScreen } from '../view/AddPetScreen';

export type StackParamList = {
  Home: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
export function StackNavigator() {
    return (
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Nome De Pets' }}
        />
        <Stack.Screen
          name="AddPet"
          component={AddPetScreen}
          options={{ title: 'Adicionar Pet' }}
        />
      </Stack.Navigator>
    );
  }
