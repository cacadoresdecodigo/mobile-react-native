import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";

import Header from "../Header/Header";
import styles from "./HistoricoEntregaTelaStyle";

export default function HistoricoEntregaTela() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>HISTÓRICO ENTREGAS</Text>

          <View style={styles.divisor}></View>

          <Card name={"Entregue"}></Card>
          <Card name={"Cancelado"}></Card>
        </View>
      </ScrollView>
      <View style={styles.voltar}>
        <TouchableOpacity style={styles.botao} title="Voltar" onPress={() => navigation.navigate("MenuTela")}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Card(props) {
  return (
    <View style={styles.ViewCard}>
      <Text style={styles.textoCard}>Status: {props.name}</Text>
      <Text style={styles.textoCard}>Número pedido: 191919</Text>
      <Text style={styles.textoCard}>Previsão de entrega: 01/01/2024</Text>
      <Text style={styles.textoCard}>Data da entrega: 01/01/2024 Hora: 16:20 </Text>
      <Text style={styles.textoCard}>Data da retirada: 02/01/2024 Hora: 20:20</Text>
    </View>
  );
}
