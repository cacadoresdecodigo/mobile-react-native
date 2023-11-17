import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
  },
  textoH1: {
    fontSize: 26,
    textAlign: "center",
    color: "#2A5A63",
    fontWeight: "600",
    padding: 16,
  },
  ViewSwitch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewConteudo: {
    marginTop: 14,
    display: "flex",
    paddingTop: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoPlano: {
    width: 320,
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#FFCF48",
    borderColor: "#2A5A63",
  },
  textoPlano: {
    fontSize: 16,
    textAlign: "center",
    color: "#2A5A63",
    padding: 10,
    fontWeight: "600",
  },
  divisor: {
    backgroundColor: "#FFCF48",
    borderColor: "#FFCF48",
    borderWidth: 0.8,
    borderRadius: 10,
    width: 150,
    height: 6,
    marginTop: -15,
    marginBottom: 24,
  },
  botaoCancelar: {
    width: 265,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ab1d1d",
    borderColor: "#C0C0C0",
    marginTop: 16,
  },
  textoBotaoCancelar: {
    fontSize: 22,
    textAlign: "center",
    color: "#e3e3e3",
  },
});

export default styles;