import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
  },
  title: {
    fontSize: 25,
  },
  textoH1: {
    fontSize: 26,
    textAlign: "center",
    color: "#2A5A63",
    fontWeight: "600",
    padding: 16,
  },
  viewConteudo: {
    display: "flex",
    paddingTop: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  textoSelect: {
    backgroundColor: "#C0C0C0",
    fontSize: 16,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    color: "#2A5A63",
    fontWeight: "600",
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
    color: "#ffff",
  },
  divisor: {
    backgroundColor: "#FFCF48",
    borderColor: "#FFCF48",
    borderWidth: 0.8,
    borderRadius: 10,
    width: 150,
    height: 6,
    marginTop: -15,
  },
  botaoCancelar: {
    width: 320,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FF0000",
    borderColor: "#2A5A63",
    marginTop: 16,
  },
});

export default styles;
