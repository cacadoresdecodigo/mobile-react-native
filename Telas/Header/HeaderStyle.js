import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewHeader: {
    display: "flex",
    height: 60,
    width: "100%",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 12,
  },
  imagem: {
    width: 52,
    height: 55,
  },
  botaoHome: {
    borderWidth: 0.5,    
  },
  viewLoginAtivo: {
    height: 48,
    width: "90%",
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
