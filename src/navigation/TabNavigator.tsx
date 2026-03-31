import { HelloWord } from "../view/HelloWord";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={StackNavigator} />
      <Tab.Screen name="Profile" component={HelloWord} />
    </Tab.Navigator>
  );
}