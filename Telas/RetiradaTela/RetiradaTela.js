import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Switch } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";
import styles from "./RetiradaTelaStyle";

export default function RetiradaTela() {

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>ESCOLHA SEU LOCAL DE RETIRADA</Text>

          <View style={styles.divisor}></View>

          <Text style={styles.textoSelect}>FLORIPA SHOPPING</Text>
          <Switch style={styles.switch} />

          <Text style={styles.textoSelect}>SHOPPING BEIRAMAR </Text>
          <Switch style={styles.switch} />

          <Text style={styles.textoSelect}>SHOPPING ITAGUAÇU</Text>
          <Switch style={styles.switch} />

          <Text style={styles.textoSelect}>CONTINENTE SHOPPING</Text>
          <Switch style={styles.switch} />
          <TouchableOpacity
            style={styles.botao}
            title="Entrar"
            onPress={() => navigation.navigate("PlanoTela")}
          >
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
