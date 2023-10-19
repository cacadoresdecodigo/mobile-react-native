import React from "react";
import { Button, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./HomeTelaStyle";

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button title="Ir pra Sobre" onPress={ () => navigation.navigate('Sobre')}/>
        </View>
    )
}

