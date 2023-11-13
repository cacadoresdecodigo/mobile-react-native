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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
    gap: 30,
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
  ViewCard: {    
    borderRadius: 10,
    borderColor: "#2A5A63",
    justifyContent: "center",
    alignItems: "center",
    padding: 8, 
    backgroundColor: "#C0C0C0",
    gap: 2,
  },
  textoCard: {
    fontSize: 16,
    color: "#2A5A63",
    fontWeight: "600",
    
  },
});

export default styles;