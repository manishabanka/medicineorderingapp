import { Text, View } from "react-native";

import { styles } from "./PriceSummary.styles";

interface PriceSummaryProps {
  subtotal: number;
  discount: number;
  total: number;
}

export function PriceSummary({ subtotal, discount, total }: PriceSummaryProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price Details</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>₹{subtotal}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Discount</Text>
        <Text style={styles.discount}>-₹{discount}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.total}>₹{total}</Text>
      </View>
    </View>
  );
}
