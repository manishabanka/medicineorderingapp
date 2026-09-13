import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import EmptyState from "../components/EmptyState";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { ScreenSkeleton } from "../components/Skeleton";
import { products } from "../data/products";
import { useInitialLoading } from "../hooks/useInitialLoading";
import { useCartStore } from "../store/cartStore";
import { styles } from "./products.styles";

export default function ProductsScreen() {
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();
  const isLoading = useInitialLoading();
  const { category, search } = useLocalSearchParams<{
    category?: string;
    search?: string;
  }>();
  const [searchText, setSearchText] = useState(
    typeof search === "string" ? search : "",
  );

  useEffect(() => {
    setSearchText(typeof search === "string" ? search : "");
  }, [search]);

  const normalizedQuery = searchText.trim().toLowerCase();

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesSearch =
          normalizedQuery.length === 0 ||
          product.name.toLowerCase().includes(normalizedQuery);

        const matchesCategory = !category || product.category === category;

        return matchesSearch && matchesCategory;
      }),
    [category, normalizedQuery],
  );

  const handleSubmit = useCallback(() => {
    const trimmedQuery = searchText.trim();

    router.setParams({
      category: category ?? undefined,
      search: trimmedQuery || undefined,
    });
  }, [category, router, searchText]);

  const handleProductPress = useCallback(
    (productId: string) => {
      router.navigate({
        pathname: "/product/[id]",
        params: { id: productId },
      });
    },
    [router],
  );

  const renderProduct = useCallback(
    ({ item }: { item: (typeof products)[number] }) => (
      <ProductCard
        product={item}
        onPress={() => handleProductPress(item.id)}
        onAddToCart={() => addToCart(item)}
      />
    ),
    [addToCart, handleProductPress],
  );

  if (isLoading) {
    return <ScreenSkeleton />;
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>All Products</Text>

      <SearchBar
        value={searchText}
        onChangeText={setSearchText}
        onSubmit={handleSubmit}
      />

      <Text>
        Showing {filteredProducts.length} of {products.length} products
      </Text>

      {filteredProducts.length === 0 ? (
        <EmptyState
          title="No products found"
          message="Try searching for another medicine or healthcare product."
        />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={renderProduct}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          maxToRenderPerBatch={6}
          windowSize={7}
        />
      )}
    </View>
  );
}
