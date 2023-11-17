import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import axios from "axios";
import Header from "../Header/Header";
import styles from "./CadastrarTelaStyle";
import { setDataOnStorage } from "../../utiils/storage";
import RetiradaTela from "../RetiradaTela/RetiradaTela";

export default function CadastrarTela() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // async function cadastrar() {
  //  try {
  //    if (nome === "" || cpf === "" || email === "" || senha === "") {
  //       Alert.alert("Atenção", "Todos os campos são obrigatórios");
  //     } else {
  //       const response = await axios.post("http://localhost:3000/clientes", { nome, cpf, email, senha });        
  //       await setDataOnStorage("usuario-logado", response.data)

  //       navigation.navigate("RetiradaTela", );
  //     }
  //   } catch (error) {
  //     console.error("Erro ao buscar dados do servidor:", error);
  //   }
  // }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView automaticallyAdjustKeyboardInsets>
        <View style={styles.viewConteudo}>
          <Image style={styles.fotoAvatar} src={"https://i.pravatar.cc/300"} />
          <Text style={styles.textoH1}>CRIE SUA CONTA</Text>

          <View style={styles.divisor}></View>

          <Text style={styles.textoInput}>NOME</Text>
          <TextInput style={styles.inputs} value={nome} onChangeText={setNome} />

          <Text style={styles.textoInput}>CPF</Text>
          <TextInput style={styles.inputs} value={cpf} onChangeText={setCpf} keyboardType="numeric" />

          <Text style={styles.textoInput}>EMAIL</Text>
          <TextInput style={styles.inputs} value={email} onChangeText={setEmail} />

          <Text style={styles.textoInput}>SENHA</Text>
          <TextInput style={styles.inputs} value={senha} onChangeText={setSenha} />

          { <TouchableOpacity style={styles.botao} title="Entrar" onPress={() =>navigation.navigate("RetiradaTela")}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity> }
        </View>
      </ScrollView>
    </View>
  );
}
