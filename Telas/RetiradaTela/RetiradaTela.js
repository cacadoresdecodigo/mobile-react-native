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
      <View style={styles.viewConteudo}>
        <Text style={styles.textoH1}>LOCAL DE RETIRADA</Text>

        <View style={styles.divisor}></View>
        
        <View style={styles.ViewSwitch}>
          <Text style={styles.textoSelect}>FLORIPA SHOPPING</Text>
          <Switch style={styles.switch} />
        </View>

        <View style={styles.ViewSwitch}>
          <Text style={styles.textoSelect}>SHOPPING BEIRAMAR</Text>
          <Switch style={styles.switch} />
        </View>

        <View style={styles.ViewSwitch}>
          <Text style={styles.textoSelect}>SHOPPING ITAGUAÇU</Text>
          <Switch style={styles.switch} />
        </View>

        <View style={styles.ViewSwitch}>
          <Text style={styles.textoSelect}>CONTINENTE SHOPPING</Text>
          <Switch style={styles.switch} />
        </View>

        <TouchableOpacity style={styles.botao} title="Plano" onPress={() => navigation.navigate("PlanoTela")}>
          <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
