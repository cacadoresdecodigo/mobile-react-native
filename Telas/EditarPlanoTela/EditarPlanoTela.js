import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";
import styles from "./EditarPlanoTelaStyle";

export default function EditarPlanoTela() {
  const navigation = useNavigation()

  function atualizarDados() {
      Alert.alert("Atualização Concluída", "As alterações no seu cadastro foram salvas com sucesso!");
      navigation.goBack();
  }

   function cancelarPlano() {
    Alert.alert("Confirmação", "Tem certeza de que deseja cancelar o plano?", [
        {
          text: "Sim", 
          onPress: () => {Alert.alert("Plano Cancelado", "O plano foi cancelado com sucesso!");
          navigation.navigate("HomeTela");
        },
      },
        {
          text: 'Não', 
          onPress: () => console.log('OK Pressed')
        },
      ]);
  }

  return (
    <View style={styles.container}>
      <Header />
        <ScrollView>
        <View style={styles.viewConteudo}>
          <Text style={styles.textoH1}>INICIAR NOVO PLANO</Text>

          <View style={styles.divisor}></View>

          <View style={styles.ViewSwitch}>
            <Text style={styles.textoPlano}>4 RETIRADAS/MÊS R$19,90</Text>
            <TouchableOpacity style={styles.botaoSelect} title="RetiradaUm" onPress={atualizarDados}>
              <Text style={styles.textoSelect}>Salvar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewSwitch}>
            <Text style={styles.textoPlano}>8 RETIRADAS/MÊS R$45,90</Text>
            <TouchableOpacity style={styles.botaoSelect} title="RetiradaDois" onPress={atualizarDados}>
              <Text style={styles.textoSelect}>Salvar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewSwitch}>
            <Text style={styles.textoPlano}>19 RETIRADAS/MÊS R$99,90</Text>
            <TouchableOpacity style={styles.botaoSelect} title="RetiradaTres" onPress={atualizarDados}>
              <Text style={styles.textoSelect}>Salvar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewSwitch}>
            <Text style={styles.textoPlano}>+20 RETIRADAS/MÊS R$159,90</Text>
            <TouchableOpacity style={styles.botaoSelect} title="RetiradaQuatro" onPress={atualizarDados}>
              <Text style={styles.textoSelect}>Salvar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.botaoCancelar} title="Cancelar" onPress={cancelarPlano}>
            <Text style={styles.textoBotaoCancelar}>Cancelar Plano</Text>
          </TouchableOpacity>

        </View>
        </ScrollView>
    </View>
  );
}