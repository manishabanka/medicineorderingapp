import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  label: {
    fontSize: 14,
    color: "#6B7280",
  },

  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
  },

  discount: {
    fontSize: 14,
    fontWeight: "600",
    color: "#16A34A",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 4,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  total: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
});
