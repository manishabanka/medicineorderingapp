import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { dimensions } from "../theme/dimensions";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xxl,
  },

  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#DDF3F1",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  successIcon: {
    fontSize: 42,
    fontWeight: "700",
    color: colors.primary,
  },

  title: {
    fontSize: typography.heading,
    fontWeight: "700",
    color: colors.textPrimary,
    textAlign: "center",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 21,
    color: colors.textSecondary,
    textAlign: "center",
  },

  orderCard: {
    width: "100%",
    marginTop: 24,
    padding: spacing.lg,
    borderRadius: dimensions.cardRadius,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },

  orderLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },

  orderStatus: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },

  deliveryTitle: {
    fontSize: 13,
    color: colors.textSecondary,
  },

  deliveryText: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "600",
    color: colors.textPrimary,
  },

  paymentText: {
    marginTop: 12,
    fontSize: 13,
    color: colors.textSecondary,
  },

  bottomContainer: {
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  primaryButton: {
    height: dimensions.buttonHeight,
    borderRadius: dimensions.buttonRadius,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },

  primaryButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.white,
  },

  secondaryButton: {
    height: dimensions.buttonHeight,
    marginTop: spacing.sm,
    borderRadius: dimensions.buttonRadius,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },

  secondaryButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary,
  },
});
