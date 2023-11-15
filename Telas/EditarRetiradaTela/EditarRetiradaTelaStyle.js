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
  viewConteudo: {
    marginTop: 14,
    display: "flex",
    paddingTop: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  ViewSwitch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textoRetirada: {
    width: 230,
    textAlign: "center",
    backgroundColor: "#C0C0C0",
    fontSize: 16,
    margin: 10,
    padding: 10,
    color: "#2A5A63",
    fontWeight: "600",
  },

  botaoSelect: {
    width: 55,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#FFCF48",
    borderColor: "#2A5A63",
  },
  textoSelect: {
    fontSize: 14,
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
    marginTop: -15,
    marginBottom: 24,
  },
});

export default styles;
