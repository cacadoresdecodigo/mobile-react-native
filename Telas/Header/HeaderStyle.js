import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewHeader: {
    display: "flex",
    height: 88,
    width: "100%",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  imagem: {
    width: 72,
    height: 75,
  },
  botaoHome: {
    borderWidth: 0.5,    
  },
  textoLoginAtivo:{
    fontSize: 22,
    color: "#2A5A63",
  },
  viewLoginAtivo: {
    height: 48,
    width: "85%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
    gap: 10,
  },
  fotoAvatar: {
    width: 52,
    height: 55,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 50,
  },
  imagemLoginAtivo: {
    width: 32,
    height: 35,
  },
});

export default styles;
