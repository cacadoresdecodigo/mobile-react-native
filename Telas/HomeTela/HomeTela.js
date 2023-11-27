import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./HomeTelaStyle";

export default function HomeTela() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewImagem}>
        <Image style={styles.imagem} source={require("../../assets/logo3-menor.png")} />
      </View>

      <TouchableOpacity style={styles.botao} title="Entrar" onPress={() => navigation.navigate("LoginTela")}>
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} title="Cadastrar" onPress={() => navigation.navigate("CadastrarTela")}>
        <Text style={styles.textoBotao}>Cadastre-se</Text>
      </TouchableOpacity>

    </View>
  );
}
