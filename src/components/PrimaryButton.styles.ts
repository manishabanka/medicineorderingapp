import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { dimensions } from "../theme/dimensions";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export const styles = StyleSheet.create({
  button: {
    minHeight: dimensions.buttonHeight,
    backgroundColor: colors.primary,
    borderRadius: dimensions.buttonRadius,
    paddingHorizontal: spacing.xl,
    alignItems: "center",
    justifyContent: "center",
  },

  pressed: {
    opacity: 0.8,
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    fontSize: typography.body,
    fontWeight: "700",
    color: colors.white,
  },
});
