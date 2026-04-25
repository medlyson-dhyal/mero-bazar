import Map "mo:core/Map";
import List "mo:core/List";
import CartTypes "../types/cart";
import CartLib "../lib/cart";

mixin (carts : Map.Map<Principal, List.List<CartTypes.CartItem>>) {
  public shared ({ caller }) func addToCart(productId : Nat, quantity : Nat) : async () {
    CartLib.addToCart(carts, caller, productId, quantity)
  };

  public shared ({ caller }) func removeFromCart(productId : Nat) : async () {
    CartLib.removeFromCart(carts, caller, productId)
  };

  public shared ({ caller }) func updateCartQuantity(productId : Nat, quantity : Nat) : async () {
    CartLib.updateCartQuantity(carts, caller, productId, quantity)
  };

  public shared ({ caller }) func getCart() : async [CartTypes.CartItem] {
    CartLib.getCart(carts, caller)
  };

  public shared ({ caller }) func clearCart() : async () {
    CartLib.clearCart(carts, caller)
  };
};
