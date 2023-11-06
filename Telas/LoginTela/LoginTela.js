import React from "react";
import { Image, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import styles from "./LoginTelaStyle";

export default function LoginTela() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.viewImagem}>
          <Image style={styles.imagem} source={require("../../assets/logo3-menor.png")} />
        </View>

        <View style={styles.viewConteudo}>         

          <Text style={styles.textoInput}>EMAIL</Text>
          <TextInput style={styles.inputs} />

          <Text style={styles.textoInput}>SENHA</Text>
          <TextInput style={styles.inputs} />

          <TouchableOpacity style={styles.botao} title="Entrar" onPress={() => navigation.navigate("LoginTela")}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
