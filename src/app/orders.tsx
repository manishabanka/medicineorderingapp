import { FlatList, Text, View } from "react-native";

import { useOrderStore } from "../store/orderStore";
import { styles } from "./orders.styles";

export default function OrdersScreen() {
  const orders = useOrderStore((state) => state.orders);

  if (orders.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>📦</Text>

        <Text style={styles.emptyTitle}>No orders yet</Text>

        <Text style={styles.emptySubtitle}>
          Your placed orders will appear here.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(order) => order.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <View>
                <Text style={styles.orderLabel}>Order ID</Text>

                <Text style={styles.orderId}>{item.id}</Text>
              </View>

              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.itemCount}>
              {item.items.reduce(
                (total, cartItem) => total + cartItem.quantity,
                0,
              )}{" "}
              items
            </Text>

            {item.items.map((cartItem) => (
              <View key={cartItem.product.id} style={styles.productRow}>
                <Text style={styles.productName} numberOfLines={1}>
                  {cartItem.product.name}
                </Text>

                <Text style={styles.productQuantity}>
                  × {cartItem.quantity}
                </Text>
              </View>
            ))}

            <View style={styles.divider} />

            <View style={styles.bottomRow}>
              <View>
                <Text style={styles.paymentLabel}>Payment</Text>

                <Text style={styles.paymentValue}>{item.paymentMethod}</Text>
              </View>

              <View>
                <Text style={styles.totalLabel}>Total</Text>

                <Text style={styles.totalValue}>₹{item.total}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
