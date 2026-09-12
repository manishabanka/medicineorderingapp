import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import EmptyState from "../components/EmptyState";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { products } from "../data/products";
import { styles } from "./products.styles";

export default function ProductsScreen() {
  const router = useRouter();
  const { category, search } = useLocalSearchParams<{
    category?: string;
    search?: string;
  }>();
  const [searchText, setSearchText] = useState(search ?? "");

  console.log("Search:", searchText);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());

    const matchesCategory = !category || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>All Products</Text>

      <SearchBar value={searchText} onChangeText={setSearchText} />

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
              onAddToCart={() => console.log(`Added ${item.name}`)}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
