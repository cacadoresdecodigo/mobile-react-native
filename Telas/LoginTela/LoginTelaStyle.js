import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    padding: 16,
    paddingTop: 50,
  },
  title: {
    fontSize: 25,
  },
  viewImagem: {
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: 275,
    height: 90,
  },
  viewConteudo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
  },
  textoInput: {
    fontSize: 14,
    paddingTop: 24,
    paddingBottom: 4,
    color: "#2A5A63",
  },
  inputs: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#2A5A63",
    width: 320,
    height: 40,
  },
  botao: {
    width: 320,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFCF48",
    borderColor: "#2A5A63",
    marginTop: 16,
  },
  textoBotao: {
    fontSize: 22,
    textAlign: "center",
    color: "#2A5A63",
  },
  
});

export default styles;
