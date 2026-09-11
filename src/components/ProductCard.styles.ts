import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { dimensions } from "../theme/dimensions";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: dimensions.cardRadius,
    overflow: "hidden",
    marginBottom: spacing.lg,
  },

  image: {
    width: "100%",
    height: 160,
  },

  content: {
    padding: spacing.lg,
  },

  name: {
    fontSize: typography.subtitle,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },

  packSize: {
    fontSize: typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },

  price: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: colors.textPrimary,
  },

  mrp: {
    fontSize: typography.caption,
    color: colors.textLight,
    textDecorationLine: "line-through",
  },

  discount: {
    fontSize: typography.caption,
    color: colors.success,
    fontWeight: "600",
  },

  addButton: {
    height: dimensions.buttonHeight,
    borderRadius: dimensions.buttonRadius,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.white,
  },
});
