import { Text, View, TouchableOpacity, ScrollView, Image, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { pontosTuristicosStyles } from "../css/pontosTuristicos";

const igrejas = [
  {
    id: '1',
    nome: 'Ministério Ser Filho',
    imagem: require('../pictures/ministerioSerFilho.png'),
    descricao: 'Igreja com foco na visão YENPS. Um espaço de liberdade para adoração e comunhão, centrado nos ensinamentos de Yeshua e do Criador.',
    endereco: 'https://maps.app.goo.gl/zDeV2aYV1aEbGsya7',
    insta: 'https://www.instagram.com/ministerioserfilho/',
  },
  {
    id: '2',
    nome: 'Igreja Adventista do Sétimo Dia',
    imagem: require('../pictures/adventista.jpg'),
    descricao: 'Comunidade cristã com foco no retorno de Jesus e no estudo da Bíblia. Oferece atividades para todas as idades e serviços comunitários.',
    endereco: 'https://maps.app.goo.gl/14JvZ4g6DxfnM1qP7',
    insta: 'https://www.instagram.com/adventistasbrasil/',
  },
  {
    id: '3',
    nome: 'Bola de Neve',
    imagem: require('../pictures/bolaDeNeve.png'),
    descricao: 'Igreja jovem, moderna e com forte atuação na música e inclusão. Conhecida por sua linguagem acessível e ações sociais.',
    endereco: 'https://maps.app.goo.gl/JzwUpGVJFaN4Zxjt9',
    insta: 'https://www.instagram.com/bdnguarulhos/',
  },
  {
    id: '4',
    nome: 'Catedral da Sé',
    imagem: require('../pictures/catedralDaSe.jpg'),
    descricao: 'Um dos marcos históricos de São Paulo, a Catedral da Sé é uma referência arquitetônica e religiosa, aberta à visitação e celebrações.',
    endereco: 'https://maps.app.goo.gl/UKxjqCPRzZr4GhwG8',
    insta: 'https://www.instagram.com/catedraldasesp/',
  },
  {
    id: '5',
    nome: 'Templo de Salomão',
    imagem: require('../pictures/temploDeSalomao.jpeg'),
    descricao: 'Inspirado no templo bíblico, é um dos maiores centros religiosos da América Latina, com foco em eventos e visitas guiadas.',
    endereco: 'https://maps.app.goo.gl/qHPpFc7smbduT8xAA',
    insta: 'https://www.instagram.com/templodesalomao/',
  },
];

export default function Igrejas() {
  return (
    <ScrollView 
      style={pontosTuristicosStyles.container}
      contentContainerStyle={pontosTuristicosStyles.scrollContent}
    >
      <View style={pontosTuristicosStyles.header}>
        <Text style={pontosTuristicosStyles.headerText}>Igrejas em São Paulo e Guarulhos</Text>
      </View>

      {igrejas.map((igreja) => (
        <View key={igreja.id} style={pontosTuristicosStyles.pontoContainer}>
          <Image source={igreja.imagem} style={pontosTuristicosStyles.pontoImagem} />
          <View style={pontosTuristicosStyles.pontoTextoContainer}>
            <Text style={pontosTuristicosStyles.pontoNome}>
              <Icon name="home" size={20} /> {igreja.nome}
            </Text>

            <Text style={pontosTuristicosStyles.pontoDescricao}>
              <Icon name="information-circle-outline" size={16} /> {igreja.descricao}
            </Text>

            <TouchableOpacity
              style={pontosTuristicosStyles.linkBtn}
              onPress={() => Linking.openURL(igreja.insta)}
            >
              <Icon name="logo-instagram" size={18} color="#C13584" />
              <Text style={pontosTuristicosStyles.linkText}>Instagram</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={pontosTuristicosStyles.linkBtn}
              onPress={() => Linking.openURL(igreja.endereco)}
            >
              <Icon name="location-outline" size={18} color="#007AFF" />
              <Text style={pontosTuristicosStyles.linkText}>Ver no mapa</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
