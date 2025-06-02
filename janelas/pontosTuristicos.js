import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { pontosTuristicosStyles } from "../css/pontosTuristicos";

const { width } = Dimensions.get('window');

const pontos = [
  {
    id: 'AquarioSP',
    nome: 'Aquário de SP',
    imagem: require('../pictures/aquarioSP.webp'),
    imagemDetalhe: require('../pictures/aquarioSP1.webp'), 
    descricao: 'Espécies marinhas e de água doce.',
    detalhe: 'O Aquário de São Paulo oferece uma viagem fascinante por habitats aquáticos de todo o mundo, com tanques que recriam fielmente os ecossistemas marinhos e de água doce. Os visitantes podem observar de perto tubarões, raias, pinguins e uma variedade impressionante de peixes coloridos. Além disso, o local promove a conscientização sobre a conservação ambiental.',
    endereco: 'Rua Huet Bacelar, 407 - Ipiranga, São Paulo - SP, 04275-000',
  },
  {
    id: 'Pinacoteca',
    nome: 'Pinacoteca',
    imagem: require('../pictures/pinacoteca.jpg'),
    imagemDetalhe: require('../pictures/pinacoteca1.jpg'), 
    descricao: 'Museu renomado com arte brasileira.',
    detalhe: 'Fundada em 1905, a Pinacoteca de São Paulo é um dos museus de arte mais importantes do Brasil. Seu acervo conta com uma vasta coleção de arte brasileira do século XIX até a contemporaneidade, incluindo pinturas, esculturas e fotografias. O edifício em si, um projeto de Ramos de Azevedo, já é uma obra de arte.',
    endereco: 'Praça da Luz, 2 - Luz, São Paulo - SP, 01120-010',
  },
  {
    id: 'Ibirapuera',
    nome: 'Parque Ibirapuera',
    imagem: require('../pictures/iberepuera.jpg'),
    imagemDetalhe: require('../pictures/iberepuera1.jpg'), 
    descricao: 'Parque urbano com áreas verdes.',
    detalhe: 'O Parque Ibirapuera é um oásis verde no coração de São Paulo e um dos pontos de lazer mais populares da cidade. Oferece vastas áreas para piqueniques, ciclovias, pistas de corrida, além de abrigar importantes museus, como o MAM e o Museu Afro Brasil, e o Auditório Ibirapuera, projetado por Oscar Niemeyer.',
    endereco: 'Av. Pedro Álvares Cabral - Vila Mariana, São Paulo - SP, 04094-050',
  },
  {
    id: 'Mercado',
    nome: 'Mercado Municipal',
    imagem: require('../pictures/mercadoMunicipal.jpg'),
    imagemDetalhe: require('../pictures/mercadoMunicipal1.jpg'), 
    descricao: 'Sabores em um edifício histórico.',
    detalhe: 'O Mercado Municipal de São Paulo, carinhosamente chamado de Mercadão, é famoso por sua arquitetura imponente com vitrais coloridos e pela incrível variedade de produtos. É o lugar ideal para provar o famoso sanduíche de mortadela, o pastel de bacalhau, além de encontrar frutas exóticas, queijos, vinhos e especiarias de todo o mundo.',
    endereco: 'R. da Cantareira, 306 - Centro Histórico de São Paulo, São Paulo - SP, 01024-900',
  },
  {
    id: 'Mac1000',
    nome: 'Méqui 1000',
    imagem: require('../pictures/macdonalds1000.jpg'),
    imagemDetalhe: require('../pictures/macdonalds10001.jpg'), 
    descricao: 'McDonald’s nº 1000 com design icônico.',
    detalhe: 'Conhecido como "Méqui 1000", esta unidade do McDonald\'s na Avenida Paulista se destaca por sua arquitetura moderna e design arrojado. Além do menu tradicional, oferece experiências interativas e um ambiente diferenciado, tornando-se um ponto de encontro popular e um marco visual na avenida mais famosa da cidade.',
    endereco: 'Avenida Paulista, 1811 - Bela Vista, São Paulo - SP, 01311-200',
  },
  {
    id: 'Zoo',
    nome: 'Zoológico de SP',
    imagem: require('../pictures/zooSP.webp'),
    imagemDetalhe: require('../pictures/zooSP.jpg'), 
    descricao: 'Um dos maiores da América Latina.',
    detalhe: 'O Zoológico de São Paulo é um dos maiores e mais completos da América Latina, abrigando mais de 3.000 animais de diversas espécies, incluindo muitas ameaçadas de extinção. O parque oferece uma experiência educativa e divertida para todas as idades, com foco na conservação da biodiversidade e no bem-estar animal.',
    endereco: 'Av. Miguel Estefno, 4241 - Água Funda, São Paulo - SP, 04301-905',
  },
  {
    id: 'ParqueTiete',
    nome: 'Parque Ecológico do Tietê',
    imagem: require('../pictures/parqueEcologico.jpg'),
    imagemDetalhe: require('../pictures/parqueEcologico1.jpg'), 
    descricao: 'Natureza e trilhas ao ar livre.',
    detalhe: 'O Parque Ecológico do Tietê é uma vasta área verde localizada na Zona Leste de São Paulo, oferecendo um refúgio para quem busca contato com a natureza. Possui trilhas para caminhada e bicicleta, áreas para piquenique, quadras esportivas e um centro de educação ambiental, além de ser um importante local para a preservação da fauna e flora local.',
    endereco: 'Via Parque, 8055 - Engenheiro Goulart, São Paulo - SP, 03719-000',
  },
  {
    id: 'Paulista',
    nome: 'Avenida Paulista',
    imagem: require('../pictures/avenidaPaulista.jpg'),
    imagemDetalhe: require('../pictures/avenidaPaulista1.jpg'), 
    descricao: 'Coração cultural e econômico.',
    detalhe: 'A Avenida Paulista é o símbolo de São Paulo, um vibrante centro financeiro, cultural e de lazer. Repleta de arranha-céus, museus como o MASP, centros culturais, shoppings, restaurantes e teatros, a avenida pulsa dia e noite. Aos domingos, é fechada para carros e se transforma em um grande parque linear para pedestres e ciclistas.',
    endereco: 'Avenida Paulista - Bela Vista, São Paulo - SP',
  },
];

export default function PontosTuristicosApp() {
  const [selecionado, setSelecionado] = useState(null);

  if (selecionado) {
    const ponto = pontos.find(p => p.id === selecionado);
    return (
      <ScrollView style={pontosTuristicosStyles.containerDetalhe}>
        <TouchableOpacity onPress={() => setSelecionado(null)} style={pontosTuristicosStyles.botaoVoltarContainer}>
          <Text style={pontosTuristicosStyles.voltarTexto}>← Voltar</Text>
        </TouchableOpacity>

        <Text style={pontosTuristicosStyles.detalheTitulo}>{ponto.nome}</Text>

        <Image source={ponto.imagem} style={pontosTuristicosStyles.detalheImagem} />

        <Text style={pontosTuristicosStyles.detalheDescricao}>{ponto.detalhe}</Text>

        <Image source={ponto.imagemDetalhe} style={pontosTuristicosStyles.detalheImagemAdicional} />

        <Text style={pontosTuristicosStyles.detalheEnderecoTitulo}>Endereço:</Text>
        <Text style={pontosTuristicosStyles.detalheEnderecoTexto}>{ponto.endereco}</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={pontosTuristicosStyles.container}
      contentContainerStyle={pontosTuristicosStyles.scrollContent}
    >
      <View style={pontosTuristicosStyles.header}>
        <Text style={pontosTuristicosStyles.headerText}>Pontos Turísticos de SP</Text>
      </View>

      {pontos.map(ponto => (
        <TouchableOpacity
          key={ponto.id}
          style={pontosTuristicosStyles.pontoContainer}
          onPress={() => setSelecionado(ponto.id)}
        >
          <Image source={ponto.imagem} style={pontosTuristicosStyles.pontoImagem} />
          <View style={pontosTuristicosStyles.pontoTextoContainer}>
            <Text style={pontosTuristicosStyles.pontoNome}>{ponto.nome}</Text>
            <Text style={pontosTuristicosStyles.pontoDescricao}>{ponto.descricao}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
