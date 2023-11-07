import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../Header/Header";
import styles from "./CadastrarTelaStyle";

export default function CadastrarTela() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.viewConteudo}>
          <Image style={styles.fotoAvatar} src={"https://i.pravatar.cc/300"} />
          <Text style={styles.textoH1}>CRIE SUA CONTA</Text>

          <View style={styles.divisor}></View>

          <Text style={styles.textoInput}>NOME</Text>
          <TextInput style={styles.inputs} />

          <Text style={styles.textoInput}>CPF</Text>
          <TextInput style={styles.inputs} />

          <Text style={styles.textoInput}>EMAIL</Text>
          <TextInput style={styles.inputs} />

          <Text style={styles.textoInput}>SENHA</Text>
          <TextInput style={styles.inputs} />

          <TouchableOpacity
            style={styles.botao}
            title="Entrar"
            onPress={() => navigation.navigate("RetiradaTela")}
          >
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
