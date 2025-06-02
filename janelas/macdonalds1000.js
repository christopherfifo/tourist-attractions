import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "../css/style";

export default function BurguerKing() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: "https://via.placeholder.com/400x200" }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Burger King</Text>
          <Text style={styles.description}>
            O Burger King é uma rede internacional de fast-food conhecida por
            seus hambúrgueres flame-broiled e o famoso Whopper. Em Guarulhos, a
            unidade oferece um ambiente moderno e acolhedor, com um cardápio
            diversificado que inclui hambúrgueres, batatas fritas, sobremesas e
            bebidas.
          </Text>
          <Text style={styles.info}>
            Horário de Funcionamento: 10h às 22h{"\n"}
            Endereço: Av. Exemplo, 5678{"\n"}
            Telefone: (11) 4567-8901
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