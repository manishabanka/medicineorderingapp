import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F9",
  },

  listContent: {
    padding: 16,
  },

  orderCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },

  orderHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  orderLabel: {
    fontSize: 12,
    color: "#6B7280",
  },

  orderId: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#DCFCE7",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#16A34A",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 14,
  },

  itemCount: {
    marginBottom: 10,
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
  },

  productRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  productName: {
    flex: 1,
    marginRight: 12,
    fontSize: 13,
    color: "#374151",
  },

  productQuantity: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6B7280",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  paymentLabel: {
    fontSize: 12,
    color: "#6B7280",
  },

  paymentValue: {
    marginTop: 3,
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
  },

  totalLabel: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "right",
  },

  totalValue: {
    marginTop: 3,
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
    textAlign: "right",
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    backgroundColor: "#F5F7F9",
  },

  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  emptySubtitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: "#6B7280",
    textAlign: "center",
  },
});
