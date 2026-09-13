import { memo } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

import { Product } from "../types/product";
import { styles } from "./ProductCard.styles";

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  onAddToCart: () => void;
}

function ProductCard({ product, onPress, onAddToCart }: ProductCardProps) {
  const handleAddToCart = () => {
    onAddToCart();
    Alert.alert("Added to cart", `${product.name} was added to your cart.`);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
          <Text style={styles.name} numberOfLines={2}>
            {product.name}
          </Text>
        </TouchableOpacity>

        <Text style={styles.packSize}>{product.packSize}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹{product.price}</Text>

          <Text style={styles.mrp}>₹{product.mrp}</Text>

          <Text style={styles.discount}>{product.discount}% off</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default memo(ProductCard);
