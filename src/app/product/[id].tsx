import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { ScreenSkeleton } from "../../components/Skeleton";
import { products } from "../../data/products";
import { useInitialLoading } from "../../hooks/useInitialLoading";
import { useCartStore } from "../../store/cartStore";
import { styles } from "./[id].styles";

export default function ProductDetailsScreen() {
  const isLoading = useInitialLoading();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = products.find((item) => item.id === id);
  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) {
    return <ScreenSkeleton rows={2} showSearch={false} />;
  }

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
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />

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
            addToCart(product);
            Alert.alert(
              "Added to cart",
              `${product.name} was added to your cart.`,
            );
          }}
        />

        <View style={styles.placeOrderButton}>
          <PrimaryButton
            title="Place Order"
            onPress={() => {
              addToCart(product);
              router.replace("/checkout");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
