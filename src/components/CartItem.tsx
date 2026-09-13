import { Image, Pressable, Text, View } from "react-native";

import { CartItem as CartItemType } from "../store/cartStore";
import { styles } from "./CartItem.styles";
import { QuantitySelector } from "./QuantitySelector";

interface CartItemProps {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  const { product, quantity } = item;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>

        <Text style={styles.packSize}>{product.packSize}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹{product.price}</Text>

          <Text style={styles.mrp}>₹{product.mrp}</Text>

          <Text style={styles.discount}>{product.discount}% OFF</Text>
        </View>

        <View style={styles.bottomRow}>
          <QuantitySelector
            quantity={quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />

          <Pressable onPress={onRemove}>
            <Text style={styles.removeText}>Remove</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
