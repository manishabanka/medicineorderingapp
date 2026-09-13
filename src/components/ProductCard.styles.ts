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
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.primaryDark,
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },

  image: {
    width: "100%",
    height: 160,
    backgroundColor: colors.surfaceMuted,
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

  buttonContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },

  addButton: {
    height: dimensions.buttonHeight,
    borderRadius: dimensions.buttonRadius,
    backgroundColor: colors.primary,
    shadowColor: colors.primaryDark,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.white,
  },
});
