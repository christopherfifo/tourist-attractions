import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export const pontosTuristicosStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingBottom: 70
  },
  scrollContent: {
    paddingBottom: 20
  },
  header: {
    alignItems: "center",
    padding: 20,
    paddingTop: 10
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#2c3e50"
  },
  pontoContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden'
  },
  pontoImagem: {
    width: '100%',
    height: width * 0.5,
    resizeMode: 'cover'
  },
  pontoTextoContainer: {
    padding: 15
  },
  pontoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  containerDetalhe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 80, 
},
botaoVoltarContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'flex-start',
},
voltarTexto: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: '500',
},
detalheTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
},
detalheImagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 25,
    resizeMode: 'cover',
},
detalheDescricao: {
    fontSize: 16,
    lineHeight: 24,
    color: '#34495e',
    marginBottom: 25,
    textAlign: 'justify',
},
detalheImagemAdicional: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 25,
    resizeMode: 'cover',
},
detalheEnderecoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
},
detalheEnderecoTexto: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 40,
    lineHeight: 22,
},
  
});