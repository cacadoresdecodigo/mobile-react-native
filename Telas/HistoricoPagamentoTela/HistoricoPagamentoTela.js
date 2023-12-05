import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import Header from "../Header/Header";
import styles from "./HistoricoPagamentoTelaStyle.js";
import { getDataFromStorage } from "../../utiils/storage.js";

export default function HistoricoPagamentoTela() {
  const [usuarioLogado, setUsuarioLogado] = useState({});

  useEffect(() => {
    async function buscarUsuario() {
      setUsuarioLogado(await getDataFromStorage("usuario-logado"));
    }
    buscarUsuario();
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>HISTÓRICO PAGAMENTO</Text>

          <View style={styles.divisor}></View>
          {usuarioLogado.email === "maria@mail.com" && (
            <>
              <Card status={"Pago"} retirada={"Floripa Shopping"} plano={"R$ 19.90"} data={"10/11/2023"}></Card>
              <Card status={"Pago"} retirada={"Floripa Shopping"} plano={"R$ 19.90"} data={"10/10/2023"}></Card>
              <Card status={"Pago"} retirada={"Floripa Shopping"} plano={"R$ 19.90"} data={"10/09/2023"}></Card>
              <Card status={"Pago"} retirada={"Floripa Shopping"} plano={"R$ 19.90"} data={"10/08/2023"}></Card>
              <Card status={"Pago"} retirada={"Floripa Shopping"} plano={"R$ 19.90"} data={"10/07/2023"}></Card>
              <Card status={"Pago"} retirada={"Floripa Shopping"} plano={"R$ 19.90"} data={"10/06/2023"}></Card>
            </>
          )}

          {usuarioLogado.email !== "maria@mail.com" && (
            <>
              <NovoUsuario status={"Você ainda não possui pagamentos!"}></NovoUsuario>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

function Card(props) {
  return (
    <View style={styles.ViewCard}>
      <Text style={styles.textoCard}>Status: {props.status}</Text>
      <Text style={styles.textoCard}>Local Retirada: {props.retirada}</Text>
      <Text style={styles.textoCard}>Plano: {props.plano}</Text>
      <Text style={styles.textoCard}>Data pagamento: {props.data}</Text>
    </View>
  );
}

function NovoUsuario(props) {
  return (
    <View style={styles.ViewCard}>
      <Text style={styles.textoCard}>{props.status}</Text>
    </View>
  );
}
