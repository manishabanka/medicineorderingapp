import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { dimensions } from "../theme/dimensions";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 80,
    backgroundColor: colors.white,
    borderRadius: dimensions.cardRadius,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primaryDark,
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },

  name: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.textPrimary,
    textAlign: "center",
  },
});
