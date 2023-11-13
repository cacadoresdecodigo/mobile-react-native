import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, Image, Alert,  } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../Header/Header.js";
import styles from "./EditarPerfilTelaStyle.js";


export default function EditarPerfilTela() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function salvarEdicao() {
    console.log({ nome, cpf, email, senha });
    if (nome === "" || cpf === "" || email === "" || senha === "") {
      Alert.alert("Atenção", "Todos os campos são obrigatórios");
    } else {
      navigation.goBack();
    }
    //aqui deve chamar a API usando Axios para cadastrar os dados do usuario no banco de dados
    //axios.post(http://URL.SITE.COM.BR/cadastrar, { nome, cpf, email, senha })
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
          <TextInput style={styles.inputs} value={cpf} onChangeText={setCpf} keyboardType="numeric" />

          <Text style={styles.textoInput}>EMAIL</Text>
          <TextInput style={styles.inputs} value={email} onChangeText={setEmail} />

          <Text style={styles.textoInput}>SENHA</Text>
          <TextInput style={styles.inputs} value={senha} onChangeText={setSenha} secureTextEntry={true}/>

          <TouchableOpacity style={styles.botao} title="Salvar" onPress={salvarEdicao}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};




