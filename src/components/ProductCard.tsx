import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
  onAddToCart?: () => void;
}

export default function ProductCard({
  product,
  onPress,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.category}>{product.category}</Text>

      <Text style={styles.name} numberOfLines={2}>
        {product.name}
      </Text>

      <View style={styles.ratingRow}>
        <Text style={styles.rating}>★ {product.rating}</Text>
        <Text style={styles.packSize}>{product.packSize}</Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>₹{product.price}</Text>

        <Text style={styles.mrp}>₹{product.mrp}</Text>

        <Text style={styles.discount}>{product.discount}% OFF</Text>
      </View>

      <Pressable
        style={styles.addButton}
        onPress={(event) => {
          event.stopPropagation();
          onAddToCart?.();
        }}
      >
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 175,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
    marginBottom: 12,
  },

  image: {
    width: "100%",
    height: 130,
    borderRadius: 12,
    backgroundColor: "#F1F5F9",
    marginBottom: 10,
  },

  category: {
    fontSize: 11,
    color: "#64748B",
    marginBottom: 4,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
    minHeight: 40,
  },

  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },

  rating: {
    fontSize: 12,
    color: "#15803D",
    fontWeight: "600",
  },

  packSize: {
    fontSize: 11,
    color: "#64748B",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 5,
    marginBottom: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0284C7",
  },

  mrp: {
    fontSize: 11,
    color: "#94A3B8",
    textDecorationLine: "line-through",
  },

  discount: {
    fontSize: 10,
    color: "#15803D",
    fontWeight: "600",
  },

  addButton: {
    backgroundColor: "#0284C7",
    borderRadius: 9,
    paddingVertical: 9,
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
});
