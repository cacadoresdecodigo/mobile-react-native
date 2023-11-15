import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";
import styles from "./EditarRetiradaTelaStyle";

export default function EditarRetiradaTela() {
  const navigation = useNavigation();

  function atualizarDados() {
      Alert.alert("Atualização Concluída", "As alterações no seu cadastro foram salvas com sucesso!");
      navigation.goBack();
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
            onPress={atualizarDados}>
            <Text style={styles.textoSelect}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewSwitch}>
          <Text style={styles.textoRetirada}>SHOPPING BEIRAMAR</Text>
          <TouchableOpacity
            style={styles.botaoSelect}
            title="ShoppingBeiraMar"
            onPress={atualizarDados}>
            <Text style={styles.textoSelect}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewSwitch}>
          <Text style={styles.textoRetirada}>SHOPPING ITAGUAÇU</Text>
          <TouchableOpacity
            style={styles.botaoSelect}
            title="ShoppingItaguacu"
            onPress={atualizarDados}>
            <Text style={styles.textoSelect}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewSwitch}>
          <Text style={styles.textoRetirada}>CONTINENTE SHOPPING</Text>
          <TouchableOpacity
            style={styles.botaoSelect}
            title="ContinenteShopping"
            onPress={atualizarDados}>
            <Text style={styles.textoSelect}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
