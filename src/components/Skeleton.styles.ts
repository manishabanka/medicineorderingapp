import { StyleSheet } from "react-native";

import { colors } from "../theme/colors";
import { dimensions } from "../theme/dimensions";
import { spacing } from "../theme/spacing";

export const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.border,
    borderRadius: dimensions.inputRadius,
  },

  screen: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },

  title: {
    width: "48%",
    height: 28,
    marginBottom: spacing.lg,
  },

  search: {
    width: "100%",
    height: dimensions.inputHeight,
    marginBottom: spacing.xxl,
  },

  card: {
    flexDirection: "row",
    padding: spacing.md,
    marginBottom: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: dimensions.cardRadius,
  },

  cardImage: {
    width: 92,
    height: 92,
    borderRadius: dimensions.inputRadius,
  },

  cardContent: {
    flex: 1,
    gap: spacing.md,
    marginLeft: spacing.md,
    paddingVertical: spacing.xs,
  },

  longLine: {
    width: "90%",
    height: 18,
  },

  shortLine: {
    width: "55%",
    height: 14,
  },

  mediumLine: {
    width: "70%",
    height: 16,
  },
});
