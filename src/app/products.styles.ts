import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },

  title: {
    fontSize: typography.title,
    fontWeight: "700",
    color: colors.textPrimary,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    letterSpacing: 0.2,
  },

  list: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
});
