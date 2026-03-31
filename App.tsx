import { StatusBar } from 'expo-status-bar';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigator } from './src/navigation/StackNavigator';
import { TabNavigator } from './src/navigation/TabNavigator';
export default function App() {
  return (
    <NavigationContainer>
      {/* ao inves de importar vamos importar  o tab */}
      <TabNavigator/>
    </NavigationContainer>
  );
}