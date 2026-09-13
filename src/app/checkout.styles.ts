import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F9",
  },

  content: {
    padding: 16,
    paddingBottom: 120,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 14,
  },

  addressName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },

  addressText: {
    fontSize: 13,
    lineHeight: 20,
    color: "#6B7280",
  },

  changeButton: {
    marginTop: 12,
    alignSelf: "flex-start",
  },

  changeButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#16A34A",
  },

  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D1D5DB",
  },

  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#16A34A",
    alignItems: "center",
    justifyContent: "center",
  },

  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#16A34A",
  },

  paymentTextContainer: {
    marginLeft: 12,
  },

  paymentTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  paymentSubtitle: {
    marginTop: 2,
    fontSize: 12,
    color: "#6B7280",
  },

  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  productInfo: {
    flex: 1,
    paddingRight: 16,
  },

  productName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
  },

  productQuantity: {
    marginTop: 4,
    fontSize: 12,
    color: "#6B7280",
  },

  productPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 4,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  priceLabel: {
    fontSize: 14,
    color: "#6B7280",
  },

  priceValue: {
    fontSize: 14,
    color: "#111827",
  },

  discountValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#16A34A",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  totalValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  bottomContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  bottomLabel: {
    fontSize: 12,
    color: "#6B7280",
  },

  bottomTotal: {
    marginTop: 2,
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  placeOrderButton: {
    minHeight: 48,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16A34A",
  },

  placeOrderText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    backgroundColor: "#F5F7F9",
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  shopButton: {
    marginTop: 20,
    paddingHorizontal: 24,
    minHeight: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16A34A",
  },

  shopButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
