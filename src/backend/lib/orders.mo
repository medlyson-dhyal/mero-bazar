import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Array "mo:core/Array";
import OrderTypes "../types/orders";
import CartTypes "../types/cart";
import CatalogTypes "../types/catalog";

module {
  public type Order = OrderTypes.Order;
  public type OrdersMap = Map.Map<Principal, List.List<Order>>;

  public func placeOrder(
    orders : OrdersMap,
    caller : Principal,
    cartItems : [CartTypes.CartItem],
    products : [CatalogTypes.Product],
    nextId : Nat
  ) : Nat {
    let orderItems : [OrderTypes.OrderItem] = cartItems.filterMap<CartTypes.CartItem, OrderTypes.OrderItem>(
      func(item) {
        switch (products.find<CatalogTypes.Product>(func(p) { p.id == item.productId })) {
          case (?product) {
            ?{ productId = item.productId; quantity = item.quantity; price = product.price }
          };
          case null { null };
        }
      }
    );

    let total = orderItems.foldLeft(
      0,
      func(acc, item) { acc + item.price * item.quantity }
    );

    let order : Order = {
      id = nextId;
      items = orderItems;
      total;
      status = "Processing";
      createdAt = Time.now();
    };

    switch (orders.get(caller)) {
      case (?userOrders) {
        userOrders.add(order);
      };
      case null {
        let userOrders = List.empty<Order>();
        userOrders.add(order);
        orders.add(caller, userOrders);
      };
    };

    nextId
  };

  public func getOrders(orders : OrdersMap, caller : Principal) : [Order] {
    switch (orders.get(caller)) {
      case (?userOrders) { userOrders.toArray() };
      case null { [] };
    }
  };

  public func getOrderById(orders : OrdersMap, caller : Principal, id : Nat) : ?Order {
    switch (orders.get(caller)) {
      case (?userOrders) {
        userOrders.find(func(o : Order) : Bool { o.id == id })
      };
      case null { null };
    }
  };
};
