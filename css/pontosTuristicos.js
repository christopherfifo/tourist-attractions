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
  }
});