import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { useOrderStore } from "../store/orderStore";
import { styles } from "./order-confirmation.styles";

export default function OrderConfirmationScreen() {
  const { orderId } = useLocalSearchParams<{
    orderId?: string;
  }>();

  const orders = useOrderStore((state) => state.orders);

  const order = orders.find((item) => item.id === orderId);

  if (!order) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.orderCard}>
            <Text style={styles.title}>Order Not Found</Text>

            <Text style={styles.subtitle}>
              We could not find the order details.
            </Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Pressable
            style={styles.primaryButton}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.primaryButtonText}>Go Home</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Success Icon */}
        <View style={styles.successCircle}>
          <Text style={styles.successIcon}>✓</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Order Placed Successfully!</Text>

        <Text style={styles.subtitle}>
          Thank you for your order. Your medicines and healthcare products are
          on their way.
        </Text>

        {/* Order Information */}
        <View style={styles.orderCard}>
          <Text style={styles.orderLabel}>Order ID</Text>

          <Text style={styles.orderStatus}>{order.id}</Text>

          <View style={styles.divider} />

          <Text style={styles.orderLabel}>Order Status</Text>

          <Text style={styles.orderStatus}>{order.status}</Text>

          <View style={styles.divider} />

          <Text style={styles.deliveryTitle}>Estimated Delivery</Text>

          <Text style={styles.deliveryText}>2–3 business days</Text>

          <Text style={styles.paymentText}>Payment: {order.paymentMethod}</Text>

          <Text style={styles.paymentText}>Total: ₹{order.total}</Text>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.primaryButton}
          onPress={() => router.replace("/orders")}
        >
          <Text style={styles.primaryButtonText}>View My Orders</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.secondaryButtonText}>Continue Shopping</Text>
        </Pressable>
      </View>
    </View>
  );
}
