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
    paddingTop: 20,  
  },
  botao: {
    width: 320,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#2A5A63",
    borderColor: "#2A5A63",
    marginTop: 12,  
  },
  textoBotao: {
    fontSize: 22,
    textAlign: "center",
    color: "#e3e3e3",
  },
  divisor: {
    backgroundColor: "#FFCF48",
    borderColor: "#FFCF48",
    borderWidth: 0.8,
    borderRadius: 10,
    width: 150,
    height: 6,
    marginTop: -18,
    marginBottom: 15,
  },
  botaoSair: {
    width: 320,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFCF48",
    borderColor: "#C0C0C0",
    marginTop: 12,
  },
  textoBotaoSair: {
    fontSize: 22,
    textAlign: "center",
    color: "#2A5A63",
  },
  botaoExcluir: {
    width: 320,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ab1d1d",
    borderColor: "#C0C0C0",
    marginTop: 12,
  },
  textoBotaoExcluir: {
    fontSize: 22,
    textAlign: "center",
    color: "#e3e3e3",
  },
});

export default styles;
