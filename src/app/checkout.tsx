import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { ScreenSkeleton } from "../components/Skeleton";
import { useInitialLoading } from "../hooks/useInitialLoading";
import { useCartStore } from "../store/cartStore";
import { useOrderStore } from "../store/orderStore";
import { styles } from "./checkout.styles";

type PaymentMethod = "Cash on Delivery" | "Online Payment";

export default function CheckoutScreen() {
  const isLoading = useInitialLoading();
  const router = useRouter();

  const items = useCartStore((state) => state.items);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getTotalMrp = useCartStore((state) => state.getTotalMrp);
  const getDiscount = useCartStore((state) => state.getDiscount);
  const getTotal = useCartStore((state) => state.getTotal);
  const clearCart = useCartStore((state) => state.clearCart);

  const addOrder = useOrderStore((state) => state.addOrder);

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("Cash on Delivery");

  const subtotal = getSubtotal();
  const totalMrp = getTotalMrp();
  const discount = getDiscount();
  const total = getTotal();

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      return;
    }

    const orderId = `ORD-${Date.now()}`;

    const createdOrderId = addOrder({
      id: orderId,
      items,
      total,
      status: "Placed",
      paymentMethod,
      address: "123 Main Street, Civil Lines, Raipur, Chhattisgarh - 492001",
      createdAt: new Date().toISOString(),
    });

    clearCart();

    router.replace({
      pathname: "/order-confirmation",
      params: {
        orderId: createdOrderId,
      },
    });
  };

  if (isLoading) {
    return <ScreenSkeleton rows={3} showSearch={false} />;
  }

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Your cart is empty</Text>

        <Pressable
          style={styles.shopButton}
          onPress={() => router.replace("/products")}
        >
          <Text style={styles.shopButtonText}>Continue Shopping</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Checkout</Text>

        {/* Delivery Address */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Delivery Address</Text>

          <Text style={styles.addressName}>Demo User</Text>

          <Text style={styles.addressText}>123 Main Street, Civil Lines</Text>

          <Text style={styles.addressText}>Raipur, Chhattisgarh - 492001</Text>

          <Pressable
            style={styles.changeButton}
            onPress={() => {
              // Mock address change for MVP
            }}
          >
            <Text style={styles.changeButtonText}>Change</Text>
          </Pressable>
        </View>

        {/* Payment Method */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Payment Method</Text>

          {/* Cash on Delivery */}
          <Pressable
            style={styles.paymentOption}
            onPress={() => setPaymentMethod("Cash on Delivery")}
          >
            <View
              style={
                paymentMethod === "Cash on Delivery"
                  ? styles.radioSelected
                  : styles.radio
              }
            >
              {paymentMethod === "Cash on Delivery" && (
                <View style={styles.radioDot} />
              )}
            </View>

            <View style={styles.paymentTextContainer}>
              <Text style={styles.paymentTitle}>Cash on Delivery</Text>

              <Text style={styles.paymentSubtitle}>
                Pay when your order arrives
              </Text>
            </View>
          </Pressable>

          {/* Online Payment */}
          <Pressable
            style={styles.paymentOption}
            onPress={() => setPaymentMethod("Online Payment")}
          >
            <View
              style={
                paymentMethod === "Online Payment"
                  ? styles.radioSelected
                  : styles.radio
              }
            >
              {paymentMethod === "Online Payment" && (
                <View style={styles.radioDot} />
              )}
            </View>

            <View style={styles.paymentTextContainer}>
              <Text style={styles.paymentTitle}>Online Payment</Text>

              <Text style={styles.paymentSubtitle}>Mock payment for MVP</Text>
            </View>
          </Pressable>
        </View>

        {/* Products */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Order Summary</Text>

          {items.map((item) => (
            <View key={item.product.id} style={styles.productRow}>
              <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={2}>
                  {item.product.name}
                </Text>

                <Text style={styles.productQuantity}>Qty: {item.quantity}</Text>
              </View>

              <Text style={styles.productPrice}>
                ₹{item.product.price * item.quantity}
              </Text>
            </View>
          ))}

          <View style={styles.divider} />

          {/* MRP */}
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>MRP</Text>

            <Text style={styles.priceValue}>₹{totalMrp}</Text>
          </View>

          {/* Subtotal */}
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Selling Price</Text>

            <Text style={styles.priceValue}>₹{subtotal}</Text>
          </View>

          {/* Discount */}
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Discount</Text>

            <Text style={styles.discountValue}>-₹{discount}</Text>
          </View>

          {/* Total */}
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>

            <Text style={styles.totalValue}>₹{total}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Order Bar */}
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.bottomLabel}>Total Amount</Text>

          <Text style={styles.bottomTotal}>₹{total}</Text>
        </View>

        <Pressable style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </Pressable>
      </View>
    </View>
  );
}
