import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { pontosTuristicosStyles } from "../css/pontosTuristicos";

// Mapeia os nomes das imagens para os nomes dos arquivos
const pontosTuristicos = [
  {
    id: '1',
    nome: 'Avenida Paulista',
    imagem: require('../pictures/avenidaPaulista.jpg'),
    tela: 'avenidaPaulista'
  },
  {
    id: '2',
    nome: 'Parque Ibirapuera',
    imagem: require('../pictures/iberepuera.jpg'),
    tela: 'iberepuera'
  },
  {
    id: '3',
    nome: 'Mercado Municipal',
    imagem: require('../pictures/mercadoMunicipal.jpg'),
    tela: 'mercadoMunicipal'
  },
  {
    id: '4',
    nome: 'Pinacoteca',
    imagem: require('../pictures/pinacoteca.jpg'),
    tela: 'pinacoteca'
  },
  {
    id: '5',
    nome: 'McDonald\'s 1000',
    imagem: require('../pictures/macdonalds1000.jpg'),
    tela: 'macdonalds1000'
  },
  {
    id: '6',
    nome: 'Aquário de SP',
    imagem: require('../pictures/aquarioSP.webp'),
    tela: 'aquarioSP'
  },
  {
    id: '7',
    nome: 'Zoológico de SP',
    imagem: require('../pictures/zooSP.webp'),
    tela: 'zooSP'
  },
  {
    id: '8',
    nome: 'Parque Ecológico',
    imagem: require('../pictures/parqueEcologico.jpg'),
    tela: 'parqueEcologico'
  }
];

export default function PontosTuristicos({ navigation }) {
  return (
    <ScrollView 
      style={pontosTuristicosStyles.container}
      contentContainerStyle={pontosTuristicosStyles.scrollContent}
    >
      <View style={pontosTuristicosStyles.header}>
        <Text style={pontosTuristicosStyles.headerText}>Pontos Turísticos de São Paulo</Text>
      </View>

      {pontosTuristicos.map((ponto) => (
        <TouchableOpacity 
          key={ponto.id} 
          style={pontosTuristicosStyles.pontoContainer}
          onPress={() => navigation.navigate(ponto.tela)}
        >
          <Image source={ponto.imagem} style={pontosTuristicosStyles.pontoImagem} />
          <View style={pontosTuristicosStyles.pontoTextoContainer}>
            <Text style={pontosTuristicosStyles.pontoNome}>{ponto.nome}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}