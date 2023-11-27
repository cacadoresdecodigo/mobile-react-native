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
            title: "Home", headerShown: false
          }}
        />
        <Stack.Screen name="LoginTela" component={LoginTela} options={{ title: "Login", headerShown: false}} />
        <Stack.Screen
          name="CadastrarTela"
          component={CadastrarTela}
          options={{ title: "Cadastrar", headerShown: false }}
        />
        <Stack.Screen
          name="RetiradaTela"
          component={RetiradaTela}
          options={{ title: "Local de Retirada", headerShown: false}}
        />
        <Stack.Screen name="PlanoTela" component={PlanoTela} options={{ title: "Planos" , headerShown: false}} />
        <Stack.Screen name="PagamentoTela" component={PagamentoTela} options={{ title: "Pagamento", headerShown: false}} />
        <Stack.Screen name="MenuTela" component={MenuTela} options={{ title: "Menu", headerShown: false }} />
        <Stack.Screen
          name="HistoricoEntregaTela"
          component={HistoricoEntregaTela}
          options={{ title: "Histórico Entrega", headerShown: false }}
        />
        <Stack.Screen
          name="HistoricoPagamentoTela"
          component={HistoricoPagamentoTela}
          options={{ title: "Histórico Pagamento", headerShown: false }}
        />
        <Stack.Screen name="EditarPerfilTela" component={EditarPerfilTela} options={{ title: "Editar Perfil", headerShown: false }} />
        <Stack.Screen name="EditarPlanoTela" component={EditarPlanoTela} options={{ title: "Editar Plano", headerShown: false }} />
        <Stack.Screen
          name="EditarPagamentoTela"
          component={EditarPagamentoTela}
          options={{ title: "Editar Pagamento", headerShown: false }}
        />
        <Stack.Screen name="EditarRetiradaTela" component={EditarRetiradaTela} options={{ title: "Editar Retirada", headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
