import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "../css/style";

export default function Caixa() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: "https://via.placeholder.com/400x200" }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Caixa Econômica Federal</Text>
          <Text style={styles.description}>
            A Caixa Econômica Federal é um dos maiores bancos públicos do
            Brasil, oferecendo uma ampla gama de serviços financeiros. Em
            Guarulhos, a agência disponibiliza atendimento presencial, caixas
            eletrônicos 24 horas e diversos serviços bancários, incluindo
            financiamentos, poupança e loterias.
          </Text>
          <Text style={styles.info}>
            Horário de Funcionamento: 10h às 16h{"\n"}
            Endereço: Av. Exemplo, 9012{"\n"}
            Telefone: (11) 6789-0123
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
