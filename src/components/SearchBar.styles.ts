import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { dimensions } from "../theme/dimensions";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  input: {
    height: dimensions.inputHeight,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: dimensions.inputRadius + 2,
    paddingHorizontal: spacing.lg,
    fontSize: typography.body,
    color: colors.textPrimary,
    shadowColor: colors.primaryDark,
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },

  suggestionsContainer: {
    marginTop: spacing.xs,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: dimensions.inputRadius,
    shadowColor: colors.primaryDark,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    overflow: "hidden",
  },

  suggestion: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  suggestionText: {
    fontSize: typography.body,
    color: colors.textPrimary,
  },
});
