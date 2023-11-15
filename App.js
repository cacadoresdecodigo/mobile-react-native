import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import HomeTela from "./Telas/HomeTela/HomeTela";
import LoginTela from "./Telas/LoginTela/LoginTela";
import CadastrarTela from "./Telas/CadastrarTela/CadastrarTela";
import RetiradaTela from "./Telas/RetiradaTela/RetiradaTela";
import PlanoTela from "./Telas/PlanoTela/PlanoTela";
import PagamentoTela from "./Telas/PagamentoTela/PagamentoTela";
import MenuTela from "./Telas/MenuTela/MenuTela";
import HistoricoEntregaTela from "./Telas/HistoricoEntregaTela/HistoricoEntregaTela";
import HistoricoPagamentoTela from "./Telas/HistoricoPagamentoTela/HistoricoPagamentoTela";
import EditarPerfilTela from "./Telas/EditarPerfilTela/EditarPerfilTela";
import EditarPlanoTela from "./Telas/EditarPlanoTela/EditarPlanoTela";
import EditarPagamentoTela from "./Telas/EditarPagamentoTela/EditarPagamentoTela";
import EditarRetiradaTela from "./Telas/EditarRetiradaTela/EditarRetiradaTela";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTela"
          component={HomeTela}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen name="LoginTela" component={LoginTela} options={{ title: "Login" }} />
        <Stack.Screen name="CadastrarTela" component={CadastrarTela} options={{ title: "Cadastrar" }} />
        <Stack.Screen name="RetiradaTela" component={RetiradaTela} options={{ title: "Local de Retirada" }} />
        <Stack.Screen name="PlanoTela" component={PlanoTela} options={{ title: "Planos" }} />
        <Stack.Screen name="PagamentoTela" component={PagamentoTela} options={{ title: "Pagamento" }} />
        <Stack.Screen name="MenuTela" component={MenuTela} options={{ title: "Menu" }} />
        <Stack.Screen name="HistoricoEntregaTela" component={HistoricoEntregaTela} options={{ title: "Histórico Entrega" }} />
        <Stack.Screen name="HistoricoPagamentoTela" component={HistoricoPagamentoTela} options={{ title: "Histórico Pagamento" }} />
        <Stack.Screen name="EditarPerfilTela" component={EditarPerfilTela} options={{ title: "Editar Perfil" }} />
        <Stack.Screen name="EditarPlanoTela" component={EditarPlanoTela} options={{title: "Editar Plano"}} />
        <Stack.Screen name="EditarPagamentoTela" component={EditarPagamentoTela} options={{title: "Editar Pagamento"}} />
      <Stack.Screen name="EditarRetiradaTela" component={EditarRetiradaTela} options={{title: "Editar Retirada"}} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
