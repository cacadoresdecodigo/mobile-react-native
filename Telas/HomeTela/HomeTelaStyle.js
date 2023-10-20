import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    padding: 16,
    // justifyContent: "center",
    
  },
  title: {
    fontSize: 25,
  },
  viewImagem: {
   
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: 350,
    height: 120,
  },
  botao: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFCF48",
    marginTop: 8,
  },
  textoBotao: {
    fontSize: 22,
    textAlign:"center",
  },
});

export default styles;
