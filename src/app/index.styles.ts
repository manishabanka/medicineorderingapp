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

  header: {
    marginBottom: spacing.lg,
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
