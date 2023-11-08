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
      <ScrollView>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>ESCOLHA SEU PLANO</Text>

          <View style={styles.divisor}></View>

          <View style={styles.ViewSwitch}>
            <Text style={styles.textoSelect}>4 RETIRADAS/MÊS R$19,90</Text>            
            <Switch style={styles.switch} />
          </View>

          <View style={styles.ViewSwitch}>
            <Text style={styles.textoSelect}>8 RETIRADAS/MÊS R$45,90</Text>            
            <Switch style={styles.switch} />
          </View>

          <View style={styles.ViewSwitch}>
            <Text style={styles.textoSelect}>20 RETIRADAS/MÊS R$99,90</Text>            
            <Switch style={styles.switch} />
          </View>

          <TouchableOpacity style={styles.botao} title="Entrar" onPress={() => navigation.navigate("LoginTela")}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>

          {/* Só vai aparecer o botão "Cancelar" quando tiver com o login ativo */}
          {/* <TouchableOpacity
            style={styles.botaoCancelar}
            title="Entrar"
            onPress={() => navigation.navigate("LoginTela")}
          >
            <Text style={styles.textoBotaoCancelar}>Cancelar Plano</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
}
