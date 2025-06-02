import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Estilos compartilhados para todas as páginas
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  textContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    marginBottom: 15,
  },
  info: {
    fontSize: 14,
    color: "#888",
    lineHeight: 20,
  },
    inf: {
    fontSize: 14,
    color: "#888",
    lineHeight: 20,
    marginBottom: 15,
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  headerImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    padding: 15,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
