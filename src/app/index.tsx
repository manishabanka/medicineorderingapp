import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";

const categories = [
  { name: "Medicines", icon: "💊" },
  { name: "Vitamins", icon: "🍊" },
  { name: "Health Devices", icon: "🩺" },
  { name: "Personal Care", icon: "🧴" },
];

export default function HomeScreen() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItemCount = useCartStore((state) => state.getCartItemCount());

  const popularProducts = products.slice(0, 6);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.title}>Your Health, Our Priority</Text>
        </View>

        <Pressable
          style={styles.cartButton}
          onPress={() => router.push("/cart")}
        >
          <Text style={styles.cartIcon}>🛒</Text>

          {cartItemCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
            </View>
          )}
        </Pressable>
      </View>

      {/* Search */}
      <Pressable
        style={styles.searchBox}
        onPress={() => router.push("/products")}
      >
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchPlaceholder}>
          Search medicines, products...
        </Text>
      </Pressable>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Healthcare made easy</Text>

        <Text style={styles.bannerText}>
          Medicines and wellness products at your fingertips.
        </Text>

        <Pressable
          style={styles.shopButton}
          onPress={() => router.push("/products")}
        >
          <Text style={styles.shopButtonText}>Shop Now</Text>
        </Pressable>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Shop by Category</Text>

      <View style={styles.categories}>
        {categories.map((category) => (
          <Pressable
            key={category.name}
            style={styles.categoryCard}
            onPress={() =>
              router.push({
                pathname: "/products",
                params: { category: category.name },
              })
            }
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryText}>{category.name}</Text>
          </Pressable>
        ))}
      </View>

      {/* Popular Products */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Products</Text>

        <Pressable onPress={() => router.push("/products")}>
          <Text style={styles.viewAll}>View All</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      >
        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() =>
              router.push({
                pathname: "/product/[id]",
                params: { id: product.id },
              })
            }
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
    marginBottom: 20,
  },

  greeting: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 4,
  },

  title: {
    fontSize: 21,
    fontWeight: "700",
    color: "#0F172A",
  },

  cartButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#E0F2FE",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  cartIcon: {
    fontSize: 21,
  },

  cartBadge: {
    position: "absolute",
    top: -3,
    right: -3,
    minWidth: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  cartBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },

  searchBox: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchPlaceholder: {
    color: "#94A3B8",
    fontSize: 14,
  },

  banner: {
    backgroundColor: "#0284C7",
    borderRadius: 20,
    padding: 22,
    marginBottom: 28,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },

  bannerText: {
    color: "#E0F2FE",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 18,
    maxWidth: 290,
  },

  shopButton: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },

  shopButtonText: {
    color: "#0284C7",
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 14,
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  categoryCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },

  categoryIcon: {
    fontSize: 28,
    marginBottom: 8,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  viewAll: {
    color: "#0284C7",
    fontWeight: "600",
    marginBottom: 14,
  },

  productList: {
    paddingBottom: 10,
  },
});
