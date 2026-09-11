import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import { useCartStore } from "../../store/cartStore";

const categories = [
  "All",
  "Pain Relief",
  "Vitamins",
  "Allergy",
  "Wellness",
  "Digestive Care",
  "Cold & Cough",
  "Health Devices",
  "Personal Care",
  "Nutrition",
  "Skin Care",
  "Health Essentials",
];

export default function ProductsScreen() {
  const params = useLocalSearchParams<{ category?: string }>();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    params.category || "All",
  );

  const addToCart = useCartStore((state) => state.addToCart);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButton}>‹</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Medicines & Products</Text>

        <Pressable onPress={() => router.push("/cart")}>
          <Text style={styles.cartIcon}>🛒</Text>
        </Pressable>
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search medicines, products..."
          placeholderTextColor="#94A3B8"
          style={styles.searchInput}
        />

        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")}>
            <Text style={styles.clearButton}>✕</Text>
          </Pressable>
        )}
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.categoryButton,
              selectedCategory === item && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === item && styles.selectedCategoryText,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        )}
      />

      {/* Result count */}
      <View style={styles.resultHeader}>
        <Text style={styles.resultText}>
          {filteredProducts.length} products
        </Text>

        <Text style={styles.resultText}>
          {selectedCategory === "All" ? "All categories" : selectedCategory}
        </Text>
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              router.push({
                pathname: "/product/[id]",
                params: { id: item.id },
              })
            }
            onAddToCart={() => addToCart(item)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔍</Text>

            <Text style={styles.emptyTitle}>No products found</Text>

            <Text style={styles.emptyText}>
              Try searching for a different medicine or category.
            </Text>

            <Pressable
              style={styles.resetButton}
              onPress={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
            >
              <Text style={styles.resetButtonText}>Clear Filters</Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 45,
    marginBottom: 18,
  },

  backButton: {
    fontSize: 38,
    color: "#0F172A",
    lineHeight: 38,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  cartIcon: {
    fontSize: 22,
  },

  searchBox: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 14,
  },

  searchIcon: {
    fontSize: 17,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#0F172A",
  },

  clearButton: {
    fontSize: 14,
    color: "#64748B",
    padding: 5,
  },

  categoryList: {
    paddingBottom: 14,
  },

  categoryButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 20,
    marginRight: 8,
  },

  selectedCategory: {
    backgroundColor: "#0284C7",
  },

  categoryButtonText: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "600",
  },

  selectedCategoryText: {
    color: "#FFFFFF",
  },

  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  resultText: {
    fontSize: 12,
    color: "#64748B",
  },

  productList: {
    paddingBottom: 30,
  },

  columnWrapper: {
    justifyContent: "space-between",
  },

  emptyContainer: {
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 45,
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  emptyText: {
    textAlign: "center",
    fontSize: 14,
    color: "#64748B",
    lineHeight: 20,
    marginBottom: 20,
  },

  resetButton: {
    backgroundColor: "#0284C7",
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 10,
  },

  resetButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
