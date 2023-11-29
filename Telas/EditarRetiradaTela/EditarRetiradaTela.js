import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";
import styles from "./EditarRetiradaTelaStyle";
import axios from "axios";
import { getDataFromStorage, setDataOnStorage } from "../../utiils/storage";
import API_BASE_URL from "../../utiils/baseUrl";

export default function EditarRetiradaTela() {
  const navigation = useNavigation();

  const [locaisRetirada, setLocaisRetirada] = useState([]);

  useEffect(() => {
    async function buscarLocaisRetirada() {
      const response = await axios.get(`${API_BASE_URL}/local-retirada`);
      setLocaisRetirada(response.data);
    }
    buscarLocaisRetirada();
  }, []);

  async function selecionarLocalRetirada(localSelecionado) {
    try {
      console.log(localSelecionado);

      const usuarioLogado = await getDataFromStorage("usuario-logado");

      const usuarioLogadoComLocalRetirada = {
        ...usuarioLogado,
        localRetiradaId: localSelecionado.id,
      };

      const response = await axios.put(`${API_BASE_URL}/clientes`, usuarioLogadoComLocalRetirada);
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
        <Text style={styles.textoH1}>EDITAR LOCAL DE RETIRADA</Text>

        <View style={styles.divisor}></View>

        {locaisRetirada.map((local) => (
          <View style={styles.ViewSwitch} key={local.id}>
            <TouchableOpacity style={styles.botaoRetirada} onPress={() => selecionarLocalRetirada(local)}>
              <Text style={styles.textoRetirada}>{local.nome}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
