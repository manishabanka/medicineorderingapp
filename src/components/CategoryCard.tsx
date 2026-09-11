import { Text, TouchableOpacity } from "react-native";
import { styles } from "./CategoryCard.styles";

interface CategoryCardProps {
  name: string;
  onPress: () => void;
}

export default function CategoryCard({ name, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}
