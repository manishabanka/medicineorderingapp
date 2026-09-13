import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F9",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  successIcon: {
    fontSize: 42,
    fontWeight: "700",
    color: "#16A34A",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 21,
    color: "#6B7280",
    textAlign: "center",
  },

  orderCard: {
    width: "100%",
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },

  orderLabel: {
    fontSize: 12,
    color: "#6B7280",
  },

  orderStatus: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "700",
    color: "#16A34A",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 16,
  },

  deliveryTitle: {
    fontSize: 13,
    color: "#6B7280",
  },

  deliveryText: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  paymentText: {
    marginTop: 12,
    fontSize: 13,
    color: "#6B7280",
  },

  bottomContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  primaryButton: {
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16A34A",
  },

  primaryButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  secondaryButton: {
    height: 48,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#16A34A",
    backgroundColor: "#FFFFFF",
  },

  secondaryButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#16A34A",
  },
});
