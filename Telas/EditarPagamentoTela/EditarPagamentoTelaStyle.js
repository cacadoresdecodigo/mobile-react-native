import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    paddingTop: 50,
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
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
    gap: 30,
  },
  inputs: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#2A5A63",
    width: 320,
    height: 40,
    fontWeight: "600",
    fontSize: 18,
    paddingLeft: 8,
    color: "#2A5A63",
  },
  botao: {
    width: 320,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFCF48",
    borderColor: "#2A5A63",
    marginTop: 12,
  },
  textoBotao: {
    fontSize: 22,
    textAlign: "center",
    color: "#2A5A63",
  },
  divisor: {
    backgroundColor: "#FFCF48",
    borderColor: "#FFCF48",
    borderWidth: 0.8,
    borderRadius: 10,
    width: 150,
    height: 6,
    marginTop: -42,
  },
  ViewPagamento: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 22,
  },
  inputsPagamento: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#2A5A63",
    width: 150,
    height: 40,
    fontWeight: "600",
    fontSize: 18,
    paddingLeft: 8,
    color: "#2A5A63",
  },
});

export default styles;
