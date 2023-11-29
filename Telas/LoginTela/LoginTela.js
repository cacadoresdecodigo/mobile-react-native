import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "./LoginTelaStyle";
import axios from "axios";
import { setDataOnStorage } from "../../utiils/storage";
import API_BASE_URL from "../../utiils/baseUrl";


export default function LoginTela() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function logar() {
    try {
      const response = await axios.post(`${API_BASE_URL}/logar`, { email, senha });
      await setDataOnStorage("usuario-logado", response.data);
      navigation.navigate("MenuTela");
    } catch(error) {
      console.log(error);
      alert("Atenção! Usuário ou senha inválido");
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
          <TextInput style={styles.inputs} value={senha} onChangeText={setSenha} secureTextEntry={true} />

          <TouchableOpacity style={styles.botao} title="Entrar" onPress={logar}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoVoltar} title="Voltar" onPress={() => navigation.navigate("HomeTela")}>
            <Text style={styles.textoBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
