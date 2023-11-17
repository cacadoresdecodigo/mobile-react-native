import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";
import styles from "./PlanoTelaStyle";

export default function PlanoTela() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.viewConteudo}>
        <Text style={styles.textoH1}>ESCOLHA SEU PLANO</Text>

        <View style={styles.divisor}></View>

        <View style={styles.ViewSwitch}>
          <TouchableOpacity
            style={styles.botaoPlano}
            title="RetiradaUm"
            onPress={() => navigation.navigate("PagamentoTela")}
          >
            <Text style={styles.textoPlano}>4 RETIRADAS/MÊS R$19,90</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewSwitch}>
          <TouchableOpacity
            style={styles.botaoPlano}
            title="RetiradaDois"
            onPress={() => navigation.navigate("PagamentoTela")}
          >
            <Text style={styles.textoPlano}>8 RETIRADAS/MÊS R$45,90</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewSwitch}>
          <TouchableOpacity
            style={styles.botaoPlano}
            title="RetiradaTres"
            onPress={() => navigation.navigate("PagamentoTela")}
          >
            <Text style={styles.textoPlano}>19 RETIRADAS/MÊS R$99,90</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewSwitch}>
          <TouchableOpacity
            style={styles.botaoPlano}
            title="RetiradaQuatro"
            onPress={() => navigation.navigate("PagamentoTela")}
          >
            <Text style={styles.textoPlano}>+20 RETIRADAS/MÊS R$159,90</Text>
          </TouchableOpacity>
        </View>

        {/* Só vai aparecer o botão "Cancelar" quando tiver com o login ativo */}
        {/* <TouchableOpacity
            style={styles.botaoCancelar}
            title="Entrar"
            onPress={() => navigation.navigate("LoginTela")}
          >
            <Text style={styles.textoBotaoCancelar}>Cancelar Plano</Text>
          </TouchableOpacity> */}
      </View>
    </View>
  );
}
