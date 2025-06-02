import { Text, View, ScrollView, Image } from "react-native";
import { styles } from "../css/style";

export default function McDonalds() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        
        <Image
          source={{ uri: "https://via.placeholder.com/400x200" }}
          style={styles.image}
        />

      
        <View style={styles.textContainer}>
          <Text style={styles.title}>McDonald's</Text>
          <Text style={styles.description}>
            O McDonald's é uma das maiores redes de fast-food do mundo,
            conhecida por seus hambúrgueres, batatas fritas e milk shakes. Em
            Guarulhos, você encontra várias unidades espalhadas pela cidade,
            oferecendo um ambiente agradável para refeições rápidas e saborosas.
          </Text>
          <Text style={styles.info}>
            Horário de Funcionamento: 24 horas{"\n"}
            Endereço: Av. Exemplo, 1234{"\n"}
            Telefone: (11) 1234-5678
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
