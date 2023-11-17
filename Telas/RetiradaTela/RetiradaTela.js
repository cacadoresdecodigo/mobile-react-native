import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";
import styles from "./RetiradaTelaStyle";
import axios from "axios";
import { getDataFromStorage } from "../../utiils/storage";

export default function RetiradaTela() {
  const navigation = useNavigation();

  const [locaisRetirada, setLocaisRetirada] = useState([]);

  const [id, setId] = useState();

  useEffect(() => {
    async function buscarLocaisRetirada() {
      const response = await axios.get("http://localhost:3000/local-retirada");
      setLocaisRetirada(response.data);
    }
    buscarLocaisRetirada();
  }, []);

  async function selecionarLocalRetirada(qualLocal) {
    try {
      console.log(qualLocal);

      const usuarioLogado = await getDataFromStorage("usuario-logado");

      const response = await axios.put("http://localhost:3000/clientes", {
        ...usuarioLogado,
        localRetiradaId: qualLocal.id,
      });

      navigation.navigate("PlanoTela");
    } catch (error) {
      console.error("Erro ao cadastrar os dados do servidor:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.viewConteudo}>
        <Text style={styles.textoH1}>LOCAL DE RETIRADA</Text>

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
