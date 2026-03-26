import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue',
  },
  topoImagem: {
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 15,
  },
  tituloTopo: {
    color: '#007bff',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    marginBottom: 6,
  },
  textoErro: {
    color: '#cc0000',
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 4,
  },
  botaoAdd: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoLista: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  botaoExcluir: {
    backgroundColor: '#ff3b30',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  nomePet: {
    fontSize: 16,
  },
  semPets: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#444',
  },
});