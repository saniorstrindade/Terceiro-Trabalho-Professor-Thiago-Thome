import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "skyblue",
  
  },


  topoImagem: {
    height: 180,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
  },

  tituloTopo: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },

  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  botaoAdd: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  botaoExcluir: {
    backgroundColor: "#ff3b30",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  botaoTexto: {
    color: "white",
    fontWeight: "bold",
  },

  item: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",


    elevation: 3,
  },

  nomePet: {
    fontSize: 16,
  },
});