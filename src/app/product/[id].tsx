import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { products } from "../../data/products";
import { styles } from "./[id].styles";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.title}>{product.name}</Text>

      <Text style={styles.packSize}>{product.packSize}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>₹{product.price}</Text>

        <Text style={styles.mrp}>₹{product.mrp}</Text>

        <Text style={styles.discount}>{product.discount}% off</Text>
      </View>

      <Text style={styles.rating}>★ {product.rating}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Details</Text>

        <Text style={styles.description}>{product.description}</Text>

        <PrimaryButton
          title="Add to Cart"
          onPress={() => {
            alert(`${product.name} added to cart`);
          }}
        />
      </View>
    </ScrollView>
  );
}
