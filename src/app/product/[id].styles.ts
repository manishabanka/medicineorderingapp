import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { dimensions } from "../../theme/dimensions";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  addButton: {
    marginTop: spacing.xxl,
  },

  placeOrderButton: {
    marginTop: spacing.md,
  },

  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },

  image: {
    width: "100%",
    height: 280,
    backgroundColor: colors.white,
    borderRadius: dimensions.cardRadius,
    marginBottom: spacing.xl,
  },

  title: {
    fontSize: typography.heading,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },

  packSize: {
    fontSize: typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },

  price: {
    fontSize: typography.title,
    fontWeight: "700",
    color: colors.textPrimary,
  },

  mrp: {
    fontSize: typography.body,
    color: colors.textLight,
    textDecorationLine: "line-through",
  },

  discount: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.success,
  },

  rating: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: spacing.xl,
  },

  section: {
    marginTop: spacing.md,
  },

  sectionTitle: {
    fontSize: typography.title,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  description: {
    fontSize: typography.body,
    color: colors.textSecondary,
    lineHeight: 22,
  },

  errorText: {
    fontSize: typography.title,
    color: colors.error,
  },
});
