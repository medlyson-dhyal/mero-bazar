import Map "mo:core/Map";
import List "mo:core/List";
import OrderTypes "../types/orders";
import CartTypes "../types/cart";
import OrdersLib "../lib/orders";
import CartLib "../lib/cart";
import CatalogLib "../lib/catalog";

mixin (
  orders : Map.Map<Principal, List.List<OrderTypes.Order>>,
  carts : Map.Map<Principal, List.List<CartTypes.CartItem>>,
  nextOrderId : [var Nat]
) {
  public shared ({ caller }) func placeOrder() : async Nat {
    let cartItems = CartLib.getCart(carts, caller);
    let products = CatalogLib.getAllProducts();
    let currentId = nextOrderId[0];
    let orderId = OrdersLib.placeOrder(orders, caller, cartItems, products, currentId);
    nextOrderId[0] += 1;
    CartLib.clearCart(carts, caller);
    orderId
  };

  public shared ({ caller }) func getOrders() : async [OrderTypes.Order] {
    OrdersLib.getOrders(orders, caller)
  };

  public query ({ caller }) func getOrderById(id : Nat) : async ?OrderTypes.Order {
    OrdersLib.getOrderById(orders, caller, id)
  };
};
