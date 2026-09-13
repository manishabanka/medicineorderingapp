import assert from "node:assert/strict";
import test from "node:test";

import { useCartStore } from "../src/store/cartStore";

const product = {
  id: "p1",
  name: "Vitamin C",
  category: "Vitamins",
  price: 120,
  mrp: 150,
  discount: 20,
  image: "https://example.com/vitamin-c.png",
  description: "Daily vitamin support",
  rating: 4.5,
  packSize: "20 tablets",
};

test("cart totals reflect quantity, not just item count", () => {
  useCartStore.setState({ items: [] });

  useCartStore.getState().addToCart(product);
  useCartStore.getState().addToCart(product);
  useCartStore.getState().increaseQuantity(product.id);

  const state = useCartStore.getState();

  assert.equal(state.items.length, 1);
  assert.equal(state.items[0].quantity, 3);
  assert.equal(state.getItemCount(), 3);
  assert.equal(state.getSubtotal(), 360);
  assert.equal(state.getTotalMrp(), 450);
  assert.equal(state.getDiscount(), 90);
  assert.equal(state.getTotal(), 360);
});
