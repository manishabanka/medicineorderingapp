import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { products } from "../data/products";
import { styles } from "./products.styles";

export default function ProductsScreen() {
  const [searchText, setSearchText] = useState("");

  console.log("Search:", searchText);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.trim().toLowerCase()),
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>All Products</Text>

      <SearchBar value={searchText} onChangeText={setSearchText} />

      <Text>
        Showing {filteredProducts.length} of {products.length} products
      </Text>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => console.log(item.name)}
            onAddToCart={() => console.log(`Added ${item.name}`)}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
