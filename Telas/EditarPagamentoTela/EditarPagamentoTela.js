import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getDataFromStorage, setDataOnStorage } from "../../utiils/storage";

import axios from "axios";
import Header from "../Header/Header";
import styles from "./EditarPagamentoTelaStyle";
import API_BASE_URL from "../../utiils/baseUrl";

export default function EditarPagamentoTela() {
  const navigation = useNavigation();

  const [id, setId] = useState()
  const [numeroCartao, setNumeroCartao] = useState();
  const [nomeCartao, setNomeCartao] = useState();
  const [cpf, setCpf] = useState();
  const [validade, setValidade] = useState();
  const [cvv, setCvv] = useState();

  useEffect(() => {
    async function buscarPagamento() {
      const usuarioLogado = await getDataFromStorage("usuario-logado");
      const response = await axios.get(`${API_BASE_URL}/pagamento/${usuarioLogado.pagamentoId}`);
      setNumeroCartao(response.data.numero_cartao);
      setNomeCartao(response.data.nome);
      setCpf(response.data.cpf);
      setValidade(response.data.validade);
      setCvv(response.data.cvv);
      setId(response.data.id)
    }
    buscarPagamento();
  }, []);

  async function EditarPagamento() {
    try {
      if (numeroCartao === "" || nomeCartao === "" || cpf === "" || validade === "" || cvv === "") {
        Alert.alert("Atenção", "Todos os campos são obrigatórios");
      } else {
        const response = await axios.put(`${API_BASE_URL}/pagamento`, { numeroCartao, nomeCartao, cpf, validade, cvv, id });
        await setDataOnStorage(response.data);
        Alert.alert("Atualização Concluída", "As alterações no seu cadastro foram salvas com sucesso!");
        navigation.navigate("MenuTela");
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados do servidor:", error);
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
            placeholder="NUMERO DO CARTÃO"
          />

          <TextInput
            style={styles.inputs}
            value={nomeCartao}
            onChangeText={setNomeCartao}
            placeholder="NOME IMPRESSO NO CARTÃO"
          />

          <TextInput
            style={styles.inputs}
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
            placeholder="CPF DO TITULAR"
          />

          <View style={styles.ViewPagamento}>
            <TextInput
              style={styles.inputsPagamento}
              value={validade}
              onChangeText={setValidade}
              placeholder="VALIDADE"
            />

            <TextInput
              style={styles.inputsPagamento}
              value={cvv}
              onChangeText={setCvv}
              keyboardType="numeric"
              placeholder="CVV"
            />
          </View>

          <TouchableOpacity style={styles.botao} title="Atualizar" onPress={EditarPagamento}>
            <Text style={styles.textoBotao}>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
