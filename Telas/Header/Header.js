import React from "react";
import { Image, View } from "react-native";

import styles from "./HeaderStyle";

export default function Header() {
  return (
    <View style={styles.viewHeader}>
      <Image style={styles.imagem} source={require("../../assets/favicon3.png")} />

      <View style={styles.viewLoginAtivo}>        
        <Image style={styles.imagemLoginAtivo} source={require("../../assets/5-removebg-preview.png")} />
        <Image style={styles.imagemLoginAtivo} source={require("../../assets/6-removebg-preview.png")} />       

        <Image style={styles.fotoAvatar} src={"https://i.pravatar.cc/300"} />
      </View>
    </View>
  );
}
