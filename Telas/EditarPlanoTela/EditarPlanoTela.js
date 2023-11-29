import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";

import axios from "axios";
import API_BASE_URL from "../../utiils/baseUrl";
import { getDataFromStorage, setDataOnStorage } from "../../utiils/storage";
import styles from "./EditarPlanoTelaStyle";

export default function EditarPlanoTela() {
  const navigation = useNavigation();

  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    async function buscarPlano() {
      const response = await axios.get(`${API_BASE_URL}/plano`);
      setPlanos(response.data);
    }
    buscarPlano();
  }, []);

  async function selecionarPlano(planoSelecionado) {
    try {
      console.log(planoSelecionado);

      const usuarioLogado = await getDataFromStorage("usuario-logado");

      const usuarioLogadoComPlano = {
        ...usuarioLogado,
        planoId: planoSelecionado.id,
      };

      const response = await axios.put(`${API_BASE_URL}/clientes`, usuarioLogadoComPlano);
      await setDataOnStorage("usuario-logado", response.data);

      navigation.navigate("MenuTela");
    } catch (error) {
      console.error("Erro ao cadastrar os dados do servidor:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.viewConteudo}>
        <Text style={styles.textoH1}>ESCOLHA SEU PLANO</Text>

        <View style={styles.divisor}></View>

        {planos.map((plano) => (
          <View style={styles.ViewSwitch} key={plano.id}>
            <TouchableOpacity style={styles.botaoRetirada} onPress={() => selecionarPlano(plano)}>
              <Text style={styles.textoRetirada}>
                {plano.nome} R${plano.valor}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}