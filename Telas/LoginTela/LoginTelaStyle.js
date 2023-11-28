import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",   
    paddingTop: 45,
    paddingTop: 150,
  },
  viewImagem: {
    justifyContent: "center",
    alignItems: "center",
    
  },
  imagem: {
    width: 275,
    height: 90,
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
    paddingBottom: 24,
  },
  textoInput: {
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 4,
    color: "#2A5A63",
    fontWeight: "600",
  },
  inputs: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#2A5A63",
    width: 320,
    height: 40,
    padding: 4,
    fontSize: 16,
    color: "#2A5A63",
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
  divisor: {
    backgroundColor: "#FFCF48",
    borderColor: "#FFCF48",
    borderWidth: 0.8,
    borderRadius: 10,
    width: 150,
    height: 6,
    marginTop: -15,
  },
  botaoVoltar: {
    width: 320,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#2A5A63",
    borderColor: "#2A5A63",
    marginTop: 12,
  },
  textoBotaoVoltar: {
    fontSize: 22,
    textAlign: "center",
    color: "#e3e3e3",
  },
});

export default styles;
