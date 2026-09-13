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
    paddingTop: spacing.xxl,
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
    fontSize: typography.caption,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: colors.primary,
    marginBottom: spacing.xs,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary,
    lineHeight: 34,
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
    shadowColor: colors.primaryDark,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
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
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },

  viewAllText: {
    fontSize: typography.body,
    fontWeight: "700",
    color: colors.primary,
  },

  categoryList: {
    gap: spacing.md,
    paddingRight: spacing.lg,
  },

  banner: {
    marginTop: spacing.xxl,
    backgroundColor: colors.primaryDark,
    borderRadius: dimensions.cardRadius,
    padding: spacing.xxl,
    shadowColor: colors.primaryDark,
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
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
