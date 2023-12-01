import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { getDataFromStorage } from "../../utiils/storage";
import Header from "../Header/Header";
import styles from "./HistoricoEntregaTelaStyle";

export default function HistoricoEntregaTela() {
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
          <Text style={styles.textoH1}>HISTÓRICO ENTREGAS</Text>

          <View style={styles.divisor}></View>
          {usuarioLogado.email === "joao@mail.com" && (
            <>
              <Card
                status={"Em transporte"}
                pedido={"191919"}
                previsao={"01/12/2023"}
                dataEntrega={""}
                dataRetirada={""}
              ></Card>
              <Card
                status={"Entregue"}
                pedido={"258896"}
                previsao={"23/11/2023"}
                dataEntrega={"22/11/2023 Hora: 09:53"}
                dataRetirada={"24/11/2023 Hora: 14:14"}
              ></Card>
              <Card
                status={"Entregue"}
                pedido={"035874"}
                previsao={"13/11/2023"}
                dataEntrega={"14/11/2023 Hora: 18:47"}
                dataRetirada={"15/11/2023 Hora: 08:41"}
              ></Card>
              <Card
                status={"Entregue"}
                pedido={"741582"}
                previsao={"05/10/2023"}
                dataEntrega={"05/10/2023 Hora: 10:18"}
                dataRetirada={"07/10/2023 Hora: 15:30"}
              ></Card>
              <Card
                status={"Entregue"}
                pedido={"654178"}
                previsao={"22/09/2023"}
                dataEntrega={"23/09/2023 Hora: 17:25"}
                dataRetirada={"26/09/2023 Hora: 19:45"}
              ></Card>
              <Card
                status={"Entregue"}
                pedido={"572896"}
                previsao={"01/08/2023"}
                dataEntrega={"01/08/2023 Hora: 09:15"}
                dataRetirada={"01/08/2023 Hora: 21:17"}
              ></Card>
            </>
          )}

          {usuarioLogado.email !== "joao@mail.com" && (
            <>
              <NovoUsuario status={"Você ainda não possui entregas!"}></NovoUsuario>
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
      <Text style={styles.textoCard}>Número pedido: {props.pedido}</Text>
      <Text style={styles.textoCard}>Previsão de entrega: {props.previsao}</Text>
      <Text style={styles.textoCard}>Data da entrega: {props.dataEntrega}</Text>
      <Text style={styles.textoCard}>Data da retirada: {props.dataRetirada}</Text>
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
