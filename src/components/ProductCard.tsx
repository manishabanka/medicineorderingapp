import { Image, Text, TouchableOpacity, View } from "react-native";

import { Product } from "../types/product";
import { styles } from "./ProductCard.styles";

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  onAddToCart: () => void;
}

export default function ProductCard({
  product,
  onPress,
  onAddToCart,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={2}>
            {product.name}
          </Text>

          <Text style={styles.packSize}>{product.packSize}</Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>₹{product.price}</Text>

            <Text style={styles.mrp}>₹{product.mrp}</Text>

            <Text style={styles.discount}>{product.discount}% off</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={onAddToCart}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
