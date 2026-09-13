import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { styles } from "./SearchBar.styles";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
  suggestions?: string[];
  onSelectSuggestion?: (suggestion: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChangeText,
  onSubmit,
  suggestions = [],
  onSelectSuggestion,
  placeholder = "Search medicines and healthcare products",
}: SearchBarProps) {
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleChangeText = (text: string) => {
    setShowSuggestions(true);
    onChangeText(text);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    onChangeText(suggestion);
    setShowSuggestions(false);
    onSelectSuggestion?.(suggestion);
  };

  const handleSubmit = () => {
    setShowSuggestions(false);
    onSubmit?.();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmit}
        onKeyPress={(event) => {
          if (event.nativeEvent.key === "Enter") {
            handleSubmit();
          }
        }}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />

      {showSuggestions && suggestions.length > 0 && onSelectSuggestion && (
        <View style={styles.suggestionsContainer}>
          {suggestions.map((suggestion) => (
            <Pressable
              key={suggestion}
              style={styles.suggestion}
              onPress={() => handleSelectSuggestion(suggestion)}
            >
              <Text style={styles.suggestionText}>{suggestion}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}
