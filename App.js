import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import HomeTela from "./Telas/HomeTela/HomeTela";
import LoginTela from "./Telas/LoginTela/LoginTela";
import CadastrarTela from "./Telas/CadastrarTela/CadastrarTela";
import RetiradaTela from "./Telas/RetiradaTela/RetiradaTela";
import PlanoTela from "./Telas/PlanoTela/PlanoTela";

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
        <Stack.Screen name="LoginTela" component={LoginTela} options={{ title: "Login" }} />
        <Stack.Screen name="CadastrarTela" component={CadastrarTela} options={{ title: "Cadastrar" }} />
        <Stack.Screen name="RetiradaTela" component={RetiradaTela} options={{ title: "Local de Retirada" }} />
        <Stack.Screen name= "PlanoTela" component={PlanoTela} options={{title: "Planos"}} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


