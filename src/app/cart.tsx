import { router } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

import { CartItem } from "../components/CartItem";
import { PriceSummary } from "../components/PriceSummary";
import { useCartStore } from "../store/cartStore";

import { styles } from "./cart.styles";

export default function CartScreen() {
  const items = useCartStore((state) => state.items);

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const getSubtotal = useCartStore((state) => state.getSubtotal);

  const getDiscount = useCartStore((state) => state.getDiscount);

  const getTotal = useCartStore((state) => state.getTotal);

  const getItemCount = useCartStore((state) => state.getItemCount);

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const total = getTotal();
  const itemCount = getItemCount();

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
