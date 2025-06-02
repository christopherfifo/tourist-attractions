import { StyleSheet } from 'react-native';

export const detalhePontoTuristicoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  botaoVoltarContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  voltarTexto: {
    fontSize: 18,
    color: '#3498db',
    fontWeight: '600',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  imagemPrincipal: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 25,
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 24,
    color: '#34495e',
    marginBottom: 25,
    textAlign: 'justify',
  },
  imagemSecundaria: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 25,
    resizeMode: 'cover',
  },
  enderecoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  enderecoTexto: {
    fontSize: 16,
    color: '#7f8c8d',
    lineHeight: 22,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db',
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
});