import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import Header from "../Header/Header";
import styles from "./HistoricoPagamentoTelaStyle.js";

export default function HistoricoPagamentoTela() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>HISTÓRICO PAGAMENTO</Text>

          <View style={styles.divisor}></View>

          <Card name={"Em atraso"}></Card>
          <Card name={"Pago"}></Card>
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
      <Text style={styles.textoCard}>Local Retirada: Floripa Shopping</Text>
      <Text style={styles.textoCard}>Plano: 159,90</Text>
      <Text style={styles.textoCard}>Data pagamento: 13/11/2023</Text>
    </View>
  );
}
