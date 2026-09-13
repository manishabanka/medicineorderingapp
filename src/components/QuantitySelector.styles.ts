import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    overflow: "hidden",
  },

  button: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#16A34A",
  },

  quantity: {
    minWidth: 32,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
});
