import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";
import { styles } from "./index.styles";

export default function HomeScreen() {
  const addToCart = useCartStore((state) => state.addToCart);
  const itemCount = useCartStore((state) => state.getItemCount());
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const popularProducts = products.slice(0, 6);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerRow}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello 👋</Text>

          <Text style={styles.title}>What are you looking for today?</Text>
        </View>

        <Pressable
          style={styles.cartButton}
          onPress={() => router.push("/cart")}
          accessibilityRole="button"
          accessibilityLabel="Open cart"
        >
          <Text style={styles.cartIcon}>🛒</Text>
          {itemCount > 0 && <Text style={styles.cartBadge}>{itemCount}</Text>}
        </Pressable>
      </View>

      <SearchBar
        value={searchText}
        onChangeText={setSearchText}
        onSubmit={() => {
          if (searchText.trim().length > 0) {
            router.navigate({
              pathname: "/products",
              params: {
                search: searchText.trim(),
              },
            });
          }
        }}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop by Category</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category}
              name={category}
              onPress={() =>
                router.navigate({
                  pathname: "/products",
                  params: { category },
                })
              }
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Healthcare made simple</Text>

        <Text style={styles.bannerText}>
          Find medicines and healthcare products in one place.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Products</Text>

        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() =>
              router.navigate({
                pathname: "/product/[id]",
                params: { id: product.id },
              })
            }
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
