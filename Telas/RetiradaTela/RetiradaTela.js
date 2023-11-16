import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";
import styles from "./RetiradaTelaStyle";
import { getDataFromStorage } from "../../utiils/storage";

export default function RetiradaTela() {
  const navigation = useNavigation();

  async function teste() {
    console.log("teste: ", await getDataFromStorage("usuario-logado"));
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.viewConteudo}>
        <Text style={styles.textoH1}>LOCAL DE RETIRADA</Text>

        <View style={styles.divisor}></View>

        <View style={styles.ViewSwitch}>
          <Text style={styles.textoRetirada}>FLORIPA SHOPPING</Text>
          <TouchableOpacity
            style={styles.botaoSelect}
            title="FloripaShopping"
            onPress={teste}
          >
            <Text style={styles.textoSelect}>Clique</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewSwitch}>
          <Text style={styles.textoRetirada}>SHOPPING BEIRAMAR</Text>
          <TouchableOpacity
            style={styles.botaoSelect}
            title="ShoppingBeiraMar"
            onPress={() => navigation.navigate("PlanoTela")}
          >
            <Text style={styles.textoSelect}>Clique</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewSwitch}>
          <Text style={styles.textoRetirada}>SHOPPING ITAGUAÇU</Text>
          <TouchableOpacity
            style={styles.botaoSelect}
            title="ShoppingItaguacu"
            onPress={() => navigation.navigate("PlanoTela")}
          >
            <Text style={styles.textoSelect}>Clique</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewSwitch}>
          <Text style={styles.textoRetirada}>CONTINENTE SHOPPING</Text>
          <TouchableOpacity
            style={styles.botaoSelect}
            title="ContinenteShopping"
            onPress={() => navigation.navigate("PlanoTela")}
          >
            <Text style={styles.textoSelect}>Clique</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
