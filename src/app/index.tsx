import { Text, View } from "react-native";
import { styles } from "./index.styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicine Ordering App</Text>

      <Text style={styles.subtitle}>
        Your healthcare shopping app starts here.
      </Text>
    </View>
  );
}
