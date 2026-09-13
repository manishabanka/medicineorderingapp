import { router } from "expo-router";
import { useMemo } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { CartItem } from "../components/CartItem";
import { PriceSummary } from "../components/PriceSummary";
import { ScreenSkeleton } from "../components/Skeleton";
import { useInitialLoading } from "../hooks/useInitialLoading";
import { useCartStore } from "../store/cartStore";

import { styles } from "./cart.styles";

export default function CartScreen() {
  const isLoading = useInitialLoading();
  const items = useCartStore((state) => state.items);

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const { subtotal, discount, total, itemCount } = useMemo(
    () => {
      const subtotal = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
      );
      const totalMrp = items.reduce(
        (sum, item) => sum + item.product.mrp * item.quantity,
        0,
      );
      const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

      return {
        subtotal,
        discount: totalMrp - subtotal,
        total: subtotal - (totalMrp - subtotal),
        itemCount,
      };
    },
    [items],
  );

  if (isLoading) {
    return <ScreenSkeleton rows={3} showSearch={false} />;
  }

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>🛒</Text>

        <Text style={styles.emptyTitle}>Your cart is empty</Text>

        <Text style={styles.emptySubtitle}>
          Add medicines and healthcare products to continue.
        </Text>

        <Pressable
          style={styles.shopButton}
          onPress={() => router.push("/products")}
        >
          <Text style={styles.shopButtonText}>Browse Products</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        windowSize={7}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onIncrease={() => increaseQuantity(item.product.id)}
            onDecrease={() => decreaseQuantity(item.product.id)}
            onRemove={() => removeFromCart(item.product.id)}
          />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Your Cart</Text>
            <Text style={styles.itemCount}>
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </Text>
          </View>
        }
        ListFooterComponent={
          <PriceSummary subtotal={subtotal} discount={discount} total={total} />
        }
      />

      <View style={styles.checkoutContainer}>
        <View>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>₹{total}</Text>
        </View>

        <Pressable
          style={styles.checkoutButton}
          onPress={() => router.push("/checkout")}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}
