import Map "mo:core/Map";
import List "mo:core/List";
import CartTypes "../types/cart";

module {
  public type CartItem = CartTypes.CartItem;
  public type CartMap = Map.Map<Principal, List.List<CartItem>>;

  public func getCart(carts : CartMap, caller : Principal) : [CartItem] {
    switch (carts.get(caller)) {
      case (?items) { items.toArray() };
      case null { [] };
    }
  };

  public func addToCart(carts : CartMap, caller : Principal, productId : Nat, quantity : Nat) {
    switch (carts.get(caller)) {
      case (?items) {
        let existing = items.findIndex(func(item : CartItem) : Bool { item.productId == productId });
        switch (existing) {
          case (?idx) {
            let item = items.at(idx);
            items.put(idx, { item with quantity = item.quantity + quantity });
          };
          case null {
            items.add({ productId; quantity });
          };
        };
      };
      case null {
        let items = List.empty<CartItem>();
        items.add({ productId; quantity });
        carts.add(caller, items);
      };
    }
  };

  public func removeFromCart(carts : CartMap, caller : Principal, productId : Nat) {
    switch (carts.get(caller)) {
      case (?items) {
        let filtered = items.filter(func(item : CartItem) : Bool { item.productId != productId });
        carts.add(caller, filtered);
      };
      case null {};
    }
  };

  public func updateCartQuantity(carts : CartMap, caller : Principal, productId : Nat, quantity : Nat) {
    switch (carts.get(caller)) {
      case (?items) {
        items.mapInPlace(func(item : CartItem) : CartItem {
          if (item.productId == productId) { { item with quantity } } else { item }
        });
      };
      case null {};
    }
  };

  public func clearCart(carts : CartMap, caller : Principal) {
    switch (carts.get(caller)) {
      case (?items) { items.clear() };
      case null {};
    }
  };
};
