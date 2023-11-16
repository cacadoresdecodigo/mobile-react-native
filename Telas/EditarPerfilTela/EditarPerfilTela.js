import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../Header/Header.js";
import styles from "./EditarPerfilTelaStyle.js";
import { getDataFromStorage, setDataOnStorage } from "../../utiils/storage.js";
import axios from "axios";

export default function EditarPerfilTela() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(async () => {
    const usuarioLogado = await getDataFromStorage("usuario-logado");
    setNome(usuarioLogado.nome);
    setCpf(usuarioLogado.cpf);
    setEmail(usuarioLogado.email);
  }, []);

  async function salvarEdicao() {
    try {
      if (nome === "" || cpf === "" || email === "" || senha === "") {
        Alert.alert("Atenção", "Todos os campos são obrigatórios");
      } else {
        const response = await axios.put("http://localhost:3000/clientes", { nome, cpf, email, senha });
        await setDataOnStorage(response.data)
        Alert.alert("Atualização Concluída", "As alterações no seu cadastro foram salvas com sucesso!");
        navigation.goBack();
      }
    } catch (error) {
      console.error("Erro ao buscar dados do servidor:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView automaticallyAdjustKeyboardInsets>
        <View style={styles.viewConteudo}>
          <Image style={styles.fotoAvatar} src={"https://i.pravatar.cc/300"} />
          <Text style={styles.textoH1}>EDITAR PERFIL</Text>

          <View style={styles.divisor}></View>

          <Text style={styles.textoInput}>NOME</Text>
          <TextInput style={styles.inputs} value={nome} onChangeText={setNome} />

          <Text style={styles.textoInput}>CPF</Text>
          <TextInput style={styles.inputs} value={cpf} onChangeText={setCpf} />

          <Text style={styles.textoInput}>EMAIL</Text>
          <TextInput style={styles.inputs} value={email} onChangeText={setEmail} />

          <Text style={styles.textoInput}>SENHA</Text>
          <TextInput style={styles.inputs} value={senha} onChangeText={setSenha} secureTextEntry={true} />

          <TouchableOpacity style={styles.botao} title="Salvar" onPress={salvarEdicao}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
