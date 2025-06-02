import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "../css/style";

export default function Outback() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: "https://via.placeholder.com/400x200" }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Outback Steakhouse</Text>
          <Text style={styles.description}>
            O Outback Steakhouse é um restaurante australiano conhecido por suas
            carnes grelhadas, especialmente o famoso Bloomin' Onion e os
            suculentos steaks. Em Guarulhos, o restaurante oferece um ambiente
            acolhedor com decoração inspirada na Austrália, perfeito para
            jantares especiais e encontros com amigos.
          </Text>
          <Text style={styles.info}>
            Horário de Funcionamento: 11h às 23h{"\n"}
            Endereço: Shopping Exemplo, 3º Piso{"\n"}
            Telefone: (11) 3456-7890
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