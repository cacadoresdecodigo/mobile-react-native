import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";
import styles from "./PlanoTelaStyle";
import axios from "axios";
import { getDataFromStorage } from "../../utiils/storage";
import API_BASE_URL from "../../utiils/baseUrl";

export default function RetiradaTela() {
  const navigation = useNavigation();

  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    async function buscarPlano() {
      const response = await axios.get(`${API_BASE_URL}/plano`);
      setPlanos(response.data);
    }
    buscarPlano();
  }, []);

  async function selecionarPlano(quaisPlanos) {
    try {
      console.log(quaisPlanos);

      const usuarioLogado = await getDataFromStorage("usuario-logado");

      const response = await axios.put(`${API_BASE_URL}/clientes`, {
        ...usuarioLogado,
        planoId: quaisPlanos.id,
      });

      navigation.navigate("PagamentoTela");
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
              <Text style={styles.textoRetirada}>{plano.nome} R${plano.valor}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

{
  /* Só vai aparecer o botão "Cancelar" quando tiver com o login ativo */
}
{
  /* <TouchableOpacity
            style={styles.botaoCancelar}
            title="Entrar"
            onPress={() => navigation.navigate("LoginTela")}
          >
            <Text style={styles.textoBotaoCancelar}>Cancelar Plano</Text>
          </TouchableOpacity> */
}
