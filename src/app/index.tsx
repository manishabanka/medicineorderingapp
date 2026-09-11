import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { styles } from "./index.styles";

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");

  const popularProducts = products.slice(0, 6);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋</Text>

        <Text style={styles.title}>What are you looking for today?</Text>
      </View>

      <SearchBar value={searchText} onChangeText={setSearchText} />

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
              onPress={() => console.log(category)}
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
            onPress={() => console.log(product.name)}
            onAddToCart={() => console.log(`Added ${product.name}`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
