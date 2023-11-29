import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { getDataFromStorage } from "../../utiils/storage";
import styles from "./HeaderStyle";


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const RANDOM_AVATAR = randomNumber(1,3)

export default function Header() {
  const navigation = useNavigation();
  const [usuarioLogado, setUsuarioLogado] = useState();

  useEffect(() => {
    async function usuarioLogado() {
      const usuarioLogado = await getDataFromStorage("usuario-logado");
      if (usuarioLogado) {
        setUsuarioLogado(usuarioLogado);
      } else {
        navigation.navigate("LoginTela");
      }
    }
    usuarioLogado();
  }, []);


  return (
    <View style={styles.viewHeader}>
      <TouchableOpacity onPress={() => navigation.navigate("MenuTela")}>
        <Image style={styles.imagem} source={require("../../assets/favicon3.png")} />
      </TouchableOpacity>

      <View style={styles.viewLoginAtivo}>
        {/* <Image style={styles.imagemLoginAtivo} source={require("../../assets/5-removebg-preview.png")} />
        <Image style={styles.imagemLoginAtivo} source={require("../../assets/6-removebg-preview.png")} /> */}
        <Text style={styles.textoLoginAtivo}>Olá, {usuarioLogado && usuarioLogado.nome}</Text>

        <Image style={styles.fotoAvatar} source={require(`../../assets/avatar${RANDOM_AVATAR}.png`)} />
      </View>
    </View>
  );
}
