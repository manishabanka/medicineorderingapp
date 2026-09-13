import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },

  image: {
    width: 80,
    height: 80,
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1F2937",
  },

  packSize: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 8,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  mrp: {
    fontSize: 13,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },

  discount: {
    fontSize: 12,
    fontWeight: "600",
    color: "#16A34A",
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },

  removeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#EF4444",
  },
});
