import React, { useEffect, useState } from "react";
import { Image, View, Text } from "react-native";

import styles from "./HeaderStyle";
import { getDataFromStorage } from "../../utiils/storage";

export default function Header() {
  const [usuarioLogado, setUsuarioLogado] = useState();
  
  useEffect(() => {
    async function usuarioLogado() {
      setUsuarioLogado(await getDataFromStorage("usuario-logado"));
    }
    usuarioLogado();
  }, []);

  return (
    <View style={styles.viewHeader}>
      <Image style={styles.imagem} source={require("../../assets/favicon3.png")} />

      <View style={styles.viewLoginAtivo}>
        <Image style={styles.imagemLoginAtivo} source={require("../../assets/5-removebg-preview.png")} />
        <Image style={styles.imagemLoginAtivo} source={require("../../assets/6-removebg-preview.png")} />
        <Text>{usuarioLogado && usuarioLogado.nome}</Text>
        <Image style={styles.fotoAvatar} src={"https://i.pravatar.cc/300"} />
      </View>
    </View>
  );
}
