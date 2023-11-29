import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    padding: 16,
    paddingTop: 170,
  },
  viewImagem: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  imagem: {
    width: 360,
    height: 130,
  },
  botao: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFCF48",
    marginTop: 16,
    borderColor: "#2A5A63",
  },
  textoBotao: {
    fontSize: 22,
    textAlign: "center",
    color: "#2A5A63",
  },
});

export default styles;
