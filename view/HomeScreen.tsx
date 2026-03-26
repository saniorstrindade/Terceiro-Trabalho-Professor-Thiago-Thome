import { StackParamList } from '../navigation/StackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { View, Button } from 'react-native';

type NavigationProp = NativeStackNavigationProp<StackParamList, 'Home'>;

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}