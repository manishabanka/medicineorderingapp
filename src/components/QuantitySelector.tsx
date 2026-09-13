import { Pressable, Text, View } from "react-native";

import { styles } from "./QuantitySelector.styles";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onDecrease}>
        <Text style={styles.buttonText}>−</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable style={styles.button} onPress={onIncrease}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
}
