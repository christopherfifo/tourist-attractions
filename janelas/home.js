import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, Animated, Dimensions } from 'react-native';
import { styles } from '../css/style';
import { carrosselStyles } from '../css/carrossel';

const carouselData = [
  {
    id: '1',
    image: require('../pictures/avenidaPaulista.jpg'),
    title: 'Avenida Paulista: O Coração Pulsante',
    description: 'Símbolo de São Paulo, onde cultura, negócios e lazer se encontram.',
  },
  {
    id: '2',
    image: require('../pictures/iberepuera.jpg'),
    title: 'Parque Ibirapuera: Oásis Urbano',
    description: 'Um refúgio verde com museus, lagos e espaços para relaxar e se exercitar.',
  },
  {
    id: '3',
    image: require('../pictures/mercadoMunicipal.jpg'),
    title: 'Mercado Municipal: Sabores da Cidade',
    description: 'Explore uma explosão de cores, aromas e sabores tradicionais paulistanos.',
  },
  {
    id: '4',
    image: require('../pictures/pinacoteca.jpg'),
    title: 'Pinacoteca: Arte e História',
    description: 'Um dos mais importantes museus de arte do Brasil, com um acervo impressionante.',
  },
  {
    id: '5',
    image: require('../pictures/macdonalds1000.jpg'),
    title: 'Méqui 1000: Experiência Única',
    description: 'O McDonald\'s número 1000 na Avenida Paulista, com arquitetura e design diferenciados.',
  },
  {
    id: '6',
    image: require('../pictures/aquarioSP.webp'),
    title: 'Aquário de SP: Viagem ao Mundo Aquático',
    description: 'Mergulhe em um universo de espécies marinhas e de água doce de todo o planeta.',
  },
  {
    id: '7',
    image: require('../pictures/zooSP.webp'),
    title: 'Zoológico de São Paulo: Aventura Selvagem',
    description: 'Conheça de perto uma incrível diversidade de animais em um dos maiores zoos da América Latina.',
  },
  {
    id: '8',
    image: require('../pictures/parqueEcologico.jpg'),
    title: 'Parque Ecológico do Tietê: Natureza Viva',
    description: 'Um vasto refúgio verde para lazer, esportes e contato direto com a fauna e flora local.',
  },
];

const { width } = Dimensions.get('window');

const Home = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // Autoplay: roda sozinho, sem depender do activeIndex
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % carouselData.length;
        carouselRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Atualiza activeIndex ao passar o dedo
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderCarouselItem = ({ item }) => {
    return (
      <View style={carrosselStyles.carouselItem}>
        <Image 
          source={item.image} 
          style={carrosselStyles.carouselImage}
          onError={(e) => console.log('Erro ao carregar imagem:', e.nativeEvent.error)}
        />
        <View style={carrosselStyles.carouselOverlay} />
        <View style={carrosselStyles.carouselTextContainer}>
          <Text style={carrosselStyles.carouselTitle}>{item.title}</Text>
          <Text style={carrosselStyles.carouselDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[styles.content, carrosselStyles.contentContainer]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Bem-vindo à Efervescente São Paulo!</Text>
          <Text style={styles.description}>
            Prepare-se para uma imersão na maior metrópole da América do Sul. Uma cidade de contrastes, onde a história encontra a modernidade.
          </Text>
        </View>

        <View style={carrosselStyles.carouselContainer}>
          <FlatList
            ref={carouselRef}
            data={carouselData}
            renderItem={renderCarouselItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            getItemLayout={(_, index) => ({
              length: width - 40,
              offset: (width - 40) * index,
              index,
            })}
          />
          <View style={carrosselStyles.paginationContainer}>
            {carouselData.map((_, index) => (
              <View
                key={index}
                style={[
                  carrosselStyles.paginationDot,
                  index === activeIndex && carrosselStyles.paginationDotActive,
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Explore os Tesouros Urbanos de Sampa</Text>
          <Text style={styles.description}>
            Da grandiosidade da Avenida Paulista aos charmosos becos da Vila Madalena, cada canto de São Paulo guarda uma história.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PontosTuristicos')}
          >
            <Text style={styles.buttonText}>Descobrir Pontos Turísticos</Text>
          </TouchableOpacity>
        </View>

        <View style={carrosselStyles.faithSection}>
          <Text style={carrosselStyles.faithTitle}>Trilha da Esperança e Fé</Text>
          <Text style={carrosselStyles.faithSubtitle}>Jesus te ama! Uma mensagem de amor e redenção para todos.</Text>
          <Image
            source={require('../pictures/jesus.jpg')}
            style={carrosselStyles.faithImage}
          />
          <Text style={carrosselStyles.faithDescription}>
            Em meio à agitação da metrópole, encontre o seu oásis de paz. Esta seção é um convite à reflexão e ao encontro com o sagrado.
          </Text>
          <Text style={styles.info}>
            "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." (João 3:16)
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Igrejas')}
          >
            <Text style={styles.buttonText}>Encontrar Locais de Oração e Paz</Text>
          </TouchableOpacity>
        </View>

        <View style={carrosselStyles.highlightCard}>
          <Text style={carrosselStyles.highlightTitle}>São Paulo: Um Universo de Sabores e Culturas!</Text>
          <Text style={carrosselStyles.highlightDescription}>
            Sua jornada não estaria completa sem experimentar a rica gastronomia paulistana, influenciada por culturas do mundo todo.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;