import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import Header from "../Header/Header";
import styles from "./MenuTelaStyle";
import { clearDataStorage } from "../../utiils/storage";

export default function MenuTela() {
  const navigation = useNavigation();

  async function sair() {
    await clearDataStorage("usuario-logado");
    navigation.navigate("HomeTela");
  }
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}> MEU PERFIL</Text>

          <View style={styles.divisor}></View>

          <TouchableOpacity
            style={styles.botao}
            title="Histórico Entrega"
            onPress={() => navigation.navigate("HistoricoEntregaTela")}
          >
            <Text style={styles.textoBotao}>Histórico Entrega</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            title="Histórico Pagamento"
            onPress={() => navigation.navigate("HistoricoPagamentoTela")}
          >
            <Text style={styles.textoBotao}>Histórico Pagamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            title="Editar Perfil"
            onPress={() => navigation.navigate("EditarPerfilTela")}
          >
            <Text style={styles.textoBotao}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            title="Editar Pagamento"
            onPress={() => navigation.navigate("EditarPagamentoTela")}
          >
            <Text style={styles.textoBotao}>Editar Pagamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            title="Editar Plano"
            onPress={() => navigation.navigate("EditarPlanoTela")}
          >
            <Text style={styles.textoBotao}>Editar Plano</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            title="Editar Retirada"
            onPress={() => navigation.navigate("EditarRetiradaTela")}
          >
            <Text style={styles.textoBotao}>Editar Local de Retirada</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoSair} title="Sair" onPress={sair}>
            <Text style={styles.textoBotaoSair}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
