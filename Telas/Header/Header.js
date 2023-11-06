import React from "react";
import { View, Image } from "react-native";

import styles from "./HeaderStyle";


export default function Header() {
    return (
        <View style={styles.viewHeader}>
          <Image style={styles.imagem} source={require("../../assets/favicon3.png")} />
        </View>
    );
  }