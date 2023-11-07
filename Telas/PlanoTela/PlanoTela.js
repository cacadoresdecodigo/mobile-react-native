import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";
import styles from "./PlanoTelaStyle";

export default function PlanoTela() {

    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>ESCOLHA SEU PLANO</Text>

          <View style={styles.divisor}></View>

          <Text style={styles.textoSelect}>
            4 RETIRADAS/MÊS {"\n"}
            R$19,90
          </Text>
          <Switch style={styles.switch} />

          <Text style={styles.textoSelect}>
            8 RETIRADAS/MÊS {"\n"}
            R$45,90
          </Text>
          <Switch style={styles.switch} />

          <Text style={styles.textoSelect}>
            20 RETIRADAS/MÊS {"\n"}
            R$99,90
          </Text>
          <Switch style={styles.switch} />

          <TouchableOpacity
            style={styles.botao}
            title="Entrar"
            onPress={() => navigation.navigate("LoginTela")}
          >
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoCancelar}
            title="Entrar"
            onPress={() => navigation.navigate("LoginTela")}
          >
            <Text style={styles.textoBotao}>Cancelar Plano</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
