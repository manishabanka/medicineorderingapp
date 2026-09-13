import { useEffect, useRef } from "react";
import { Animated, View, ViewStyle } from "react-native";

import { colors } from "../theme/colors";
import { styles } from "./Skeleton.styles";

interface SkeletonProps {
  style?: ViewStyle | ViewStyle[];
}

export function Skeleton({ style }: SkeletonProps) {
  const opacity = useRef(new Animated.Value(0.45)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.9,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.45,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => animation.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[styles.base, { backgroundColor: colors.border, opacity }, style]}
    />
  );
}

export function ScreenSkeleton({
  rows = 4,
  showSearch = true,
}: {
  rows?: number;
  showSearch?: boolean;
}) {
  return (
    <View style={styles.screen}>
      <Skeleton style={styles.title} />
      {showSearch && <Skeleton style={styles.search} />}

      {Array.from({ length: rows }, (_, index) => (
        <View key={index} style={styles.card}>
          <Skeleton style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Skeleton style={styles.longLine} />
            <Skeleton style={styles.shortLine} />
            <Skeleton style={styles.mediumLine} />
          </View>
        </View>
      ))}
    </View>
  );
}
