import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, Image, Alert, } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../Header/Header";
import styles from "./EditarPagamentoTelaStyle";

export default function EditarPagamentoTela() {
  const navigation = useNavigation();
  
  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeImpresso, setNomeImpresso] = useState("");
  const [cpfTitular, setCpfTitular] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");

  function EditarPagamento() {
    console.log({ numeroCartao, nomeImpresso, cpfTitular, validade, cvv });
    if (numeroCartao === "" || nomeImpresso === "" || cpfTitular === "" || validade === "" || cvv === "") {
      Alert.alert("Atenção", "Todos os campos são obrigatórios");
    } else {
      Alert.alert("Edição Concluída", "As alterações no seu cadastro foram salvas com sucesso!");
      navigation.goBack();
    }
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>EDITAR CARTÃO PARA PAGAMENTO</Text>

          <View style={styles.divisor}></View>
          
          <TextInput 
          style={styles.inputs} 
          value={numeroCartao} 
          onChangeText={setNumeroCartao} 
          keyboardType="numeric"  
          placeholder="NUMERO DO CARTÃO"/>

          <TextInput 
          style={styles.inputs} 
          value={nomeImpresso} 
          onChangeText={setNomeImpresso}
          placeholder="NOME IMPRESSO NO CARTÃO"/>
          
          <TextInput 
          style={styles.inputs}
          value={cpfTitular} 
          onChangeText={setCpfTitular} 
          keyboardType="numeric" 
          placeholder="CPF DO TITULAR" />

          <View style={styles.ViewPagamento}>
            <TextInput 
            style={styles.inputsPagamento} 
            value={validade} 
            onChangeText={setValidade}  
            placeholder="VALIDADE"/>

            <TextInput 
            style={styles.inputsPagamento}
            value={cvv} 
            onChangeText={setCvv} 
            keyboardType="numeric" 
            placeholder="CVV"/>
          </View>

          <TouchableOpacity style={styles.botao} title="Atualizar" onPress={EditarPagamento}>  
            <Text style={styles.textoBotao}>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
