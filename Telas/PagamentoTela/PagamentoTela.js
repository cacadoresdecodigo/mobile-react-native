import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import axios from "axios";
import API_BASE_URL from "../../utiils/baseUrl";
import { getDataFromStorage, setDataOnStorage } from "../../utiils/storage";
import Header from "../Header/Header";
import styles from "./PagamentoTelaStyle";

export default function PagamentoTela() {
  const navigation = useNavigation();

  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [cpf, setCpf] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");

  async function cadastrar() {
    try {
      if (numeroCartao === "" || nomeCartao === "" || cpf === "" || validade === "" || cvv === "") {
        alert("Atenção! Todos os campos são obrigatórios");
      } else {
        const usuarioLogado = await getDataFromStorage("usuario-logado");

        const dadosCartao = {
          numeroCartao,
          nomeCartao,
          cpf,
          validade,
          cvv,
        };

        const responsePagamento = await axios.post(`${API_BASE_URL}/pagamento`, dadosCartao);

        const usuarioLogadoComPagamento = {
          ...usuarioLogado,
          pagamentoId: responsePagamento.data.id,
        };
        const responseCliente = await axios.put(`${API_BASE_URL}/clientes`, usuarioLogadoComPagamento);
        await setDataOnStorage("usuario-logado", responseCliente.data);

        navigation.navigate("MenuTela");
      }
    } catch (error) {
      console.error("Erro ao cadastrar os dados do servidor:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView automaticallyAdjustKeyboardInsets>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>CADASTRE SEU CARTÃO PARA PAGAMENTO</Text>

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
              keyboardType="numeric"
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

          <TouchableOpacity style={styles.botao} onPress={cadastrar}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
