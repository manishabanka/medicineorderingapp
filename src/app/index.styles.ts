import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { dimensions } from "../theme/dimensions";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing.lg,
    gap: spacing.md,
  },

  header: {
    flex: 1,
  },

  greeting: {
    fontSize: typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  title: {
    fontSize: typography.heading,
    fontWeight: "700",
    color: colors.textPrimary,
    lineHeight: 30,
  },

  cartButton: {
    position: "relative",
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  cartIcon: {
    fontSize: 22,
  },

  cartBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 18,
    overflow: "hidden",
    paddingHorizontal: 4,
  },

  section: {
    marginTop: spacing.xxl,
  },

  sectionTitle: {
    fontSize: typography.title,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  categoryList: {
    gap: spacing.md,
    paddingRight: spacing.lg,
  },

  banner: {
    marginTop: spacing.xxl,
    backgroundColor: colors.primary,
    borderRadius: dimensions.cardRadius,
    padding: spacing.xxl,
  },

  bannerTitle: {
    fontSize: typography.title,
    fontWeight: "700",
    color: colors.white,
    marginBottom: spacing.sm,
  },

  bannerText: {
    fontSize: typography.body,
    color: colors.white,
    lineHeight: 20,
  },
});
