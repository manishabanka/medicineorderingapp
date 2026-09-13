import { useRouter } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { ScreenSkeleton } from "../components/Skeleton";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { useInitialLoading } from "../hooks/useInitialLoading";
import { useCartStore } from "../store/cartStore";
import { styles } from "./index.styles";

export default function HomeScreen() {
  const addToCart = useCartStore((state) => state.addToCart);
  const itemCount = useCartStore((state) => state.getItemCount());
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const isLoading = useInitialLoading();

  const popularProducts = useMemo(() => products.slice(0, 6), []);
  const searchSuggestions = useMemo(() => {
    const normalizedQuery = searchText.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return products
      .filter((product) => product.name.toLowerCase().includes(normalizedQuery))
      .map((product) => product.name)
      .slice(0, 5);
  }, [searchText]);

  const submitSearch = useCallback(
    (query = searchText) => {
      if (query.trim().length > 0) {
        router.navigate({
          pathname: "/products",
          params: {
            search: query.trim(),
          },
        });
      }
    },
    [router, searchText],
  );

  const handleProductPress = useCallback(
    (productId: string) => {
      router.navigate({
        pathname: "/product/[id]",
        params: { id: productId },
      });
    },
    [router],
  );

  const handleCategoryPress = useCallback(
    (category: string) => {
      router.navigate({
        pathname: "/products",
        params: { category },
      });
    },
    [router],
  );

  const handleAllProductsPress = useCallback(() => {
    router.navigate("/products");
  }, [router]);

  if (isLoading) {
    return <ScreenSkeleton rows={3} />;
  }

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
        onSubmit={submitSearch}
        suggestions={searchSuggestions}
        onSelectSuggestion={(suggestion) => {
          setSearchText(suggestion);
          submitSearch(suggestion);
        }}
      />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>

          <Pressable
            onPress={handleAllProductsPress}
            accessibilityRole="button"
            accessibilityLabel="View all products"
          >
            <Text style={styles.viewAllText}>All products</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category}
              name={category}
              onPress={() => handleCategoryPress(category)}
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
            onPress={() => handleProductPress(product.id)}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
