import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "./LoginTelaStyle";

export default function LoginTela() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar() {
    console.log({ email, senha });
    // Quando conectar com o banco deve buscar o email e admin do banco e fazer a validação
    if (email !== "admin" && senha !== 123) {
      Alert.alert("Atenção", "Usuário ou senha inválido");
    } else {
      navigation.navigate("MenuTela");
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <View style={styles.viewImagem}>
          <Image style={styles.imagem} source={require("../../assets/logo3-menor.png")} />
        </View>

        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>LOGIN</Text>

          <View style={styles.divisor}></View>

          <Text style={styles.textoInput}>EMAIL</Text>
          <TextInput style={styles.inputs} value={email} onChangeText={setEmail} />

          <Text style={styles.textoInput}>SENHA</Text>
          <TextInput style={styles.inputs} value={senha} onChangeText={setSenha} />

          <TouchableOpacity style={styles.botao} title="Entrar" onPress={logar}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
