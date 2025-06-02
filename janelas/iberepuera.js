import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "../css/style";

export default function Cinema() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: "https://via.placeholder.com/400x200" }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Cinema</Text>
          <Text style={styles.description}>
            O cinema em Guarulhos oferece uma experiência única de
            entretenimento com as mais recentes produções do cinema nacional e
            internacional. Com salas modernas, sistema de som de última geração
            e confortáveis poltronas, é o lugar perfeito para assistir aos
            melhores filmes.
          </Text>
          <Text style={styles.info}>
            Horário de Funcionamento: 14h às 23h{"\n"}
            Endereço: Shopping Exemplo, 2º Piso{"\n"}
            Telefone: (11) 2345-6789
          </Text>
        </View>

        <Image
          source={{ uri: "https://via.placeholder.com/400x200" }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}
