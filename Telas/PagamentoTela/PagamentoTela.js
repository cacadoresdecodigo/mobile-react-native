import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../Header/Header";
import styles from "./PagamentoTelaStyle";

export default function PagamentoTela() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>CADASTRE SEU CARTÃO PARA PAGAMENTO</Text>

          <View style={styles.divisor}></View>

          {/* <Text style={styles.textoInput}>NUMERO DO CARTÃO</Text> */}
          <TextInput style={styles.inputs} placeholder="NUMERO DO CARTÃO"/>

          {/* <Text style={styles.textoInput}>NOME IMPRESSO NO CARTÃO</Text> */}
          <TextInput style={styles.inputs} placeholder="NOME IMPRESSO NO CARTÃO"/>

          {/* <Text style={styles.textoInput}>CPF DO TITULAR</Text> */}
          <TextInput style={styles.inputs} placeholder="CPF DO TITULAR" />

          <View style={styles.ViewPagamento}>
            {/* <Text style={styles.textoInputPagamento}>VALIDADE</Text> */}
            <TextInput style={styles.inputsPagamento} placeholder="VALIDADE"/>

            {/* <Text style={styles.textoInputPagamento}>CVV</Text> */}
            <TextInput style={styles.inputsPagamento} placeholder="CVV"/>
          </View>

          <TouchableOpacity style={styles.botao} title="Pagamento" onPress={() => navigation.navigate("MenuTela")}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
