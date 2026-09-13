import { Alert, FlatList, Pressable, Text, View } from "react-native";

import { ScreenSkeleton } from "../components/Skeleton";
import { useInitialLoading } from "../hooks/useInitialLoading";
import { useOrderStore } from "../store/orderStore";
import { styles } from "./orders.styles";

export default function OrdersScreen() {
  const isLoading = useInitialLoading();
  const orders = useOrderStore((state) => state.orders);
  const cancelOrder = useOrderStore((state) => state.cancelOrder);

  const handleCancelOrder = (orderId: string) => {
    Alert.alert("Cancel order?", "This action cannot be undone.", [
      { text: "Keep order", style: "cancel" },
      {
        text: "Cancel order",
        style: "destructive",
        onPress: () => cancelOrder(orderId),
      },
    ]);
  };

  if (isLoading) {
    return <ScreenSkeleton rows={3} showSearch={false} />;
  }

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
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={7}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <View>
                <Text style={styles.orderLabel}>Order ID</Text>

                <Text style={styles.orderId}>{item.id}</Text>
              </View>

              <View
                style={
                  item.status === "Cancelled"
                    ? [styles.statusBadge, styles.cancelledBadge]
                    : styles.statusBadge
                }
              >
                <Text
                  style={
                    item.status === "Cancelled"
                      ? [styles.statusText, styles.cancelledText]
                      : styles.statusText
                  }
                >
                  {item.status}
                </Text>
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

            {item.status === "Placed" && (
              <View style={styles.actionRow}>
                <Pressable
                  style={styles.cancelButton}
                  onPress={() => handleCancelOrder(item.id)}
                >
                  <Text style={styles.cancelButtonText}>Cancel order</Text>
                </Pressable>
              </View>
            )}

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
