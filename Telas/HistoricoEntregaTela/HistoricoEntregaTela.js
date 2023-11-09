import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

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

          <Card></Card>
          <Card></Card>
          
        </View>
      </ScrollView>
    </View>
  );
}

function Card() {
  return (
    <View style={styles.ViewCard}>
      <Text style={styles.textoCard}>Status: Entregue</Text>
      <Text style={styles.textoCard}>Número pedido: 191919</Text>
      <Text style={styles.textoCard}>Previsão de entrega: 01/01/2024</Text>
      <Text style={styles.textoCard}>Data da entrega: 01/01/2024 Hora: 16:20 </Text>
      <Text style={styles.textoCard}>Data da retirada: 02/01/2024 Hora: 20:20</Text>
    </View>
  );
}
