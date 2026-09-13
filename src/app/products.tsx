import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import EmptyState from "../components/EmptyState";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";
import { styles } from "./products.styles";

export default function ProductsScreen() {
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();
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

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      normalizedQuery.length === 0 ||
      product.name.toLowerCase().includes(normalizedQuery);

    const matchesCategory = !category || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>All Products</Text>

      <SearchBar
        value={searchText}
        onChangeText={setSearchText}
        onSubmit={() => {
          const trimmedQuery = searchText.trim();

          router.setParams({
            category: category ?? undefined,
            search: trimmedQuery || undefined,
          });
        }}
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
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() =>
                router.navigate({
                  pathname: "/product/[id]",
                  params: { id: item.id },
                })
              }
              onAddToCart={() => {
                addToCart(item);
              }}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
