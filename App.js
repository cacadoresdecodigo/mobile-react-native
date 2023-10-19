import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import HomeTela from "./Telas/HomeTela/HomeTela";
import LoginTela from "./Telas/LoginTela/LoginTela";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTela}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen name="Sobre" component={LoginTela} options={{ title: "Sobre a empresa" }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


