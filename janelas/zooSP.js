import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "../css/style";

export default function SmartFit() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: "https://via.placeholder.com/400x200" }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Smart Fit</Text>
          <Text style={styles.description}>
            A Smart Fit é uma rede de academias que oferece equipamentos
            modernos, aulas coletivas e treinamento personalizado a preços
            acessíveis. Em Guarulhos, a unidade conta com instrutores
            qualificados, ambiente climatizado e uma ampla variedade de
            atividades físicas para todos os níveis.
          </Text>
          <Text style={styles.info}>
            Horário de Funcionamento: 6h às 22h{"\n"}
            Endereço: Shopping Exemplo, 4º Piso{"\n"}
            Telefone: (11) 5678-9012
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