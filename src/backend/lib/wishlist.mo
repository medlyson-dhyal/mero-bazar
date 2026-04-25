import Map "mo:core/Map";
import Set "mo:core/Set";

module {
  public type WishlistMap = Map.Map<Principal, Set.Set<Nat>>;

  public func getWishlist(wishlists : WishlistMap, caller : Principal) : [Nat] {
    switch (wishlists.get(caller)) {
      case (?wish) { wish.toArray() };
      case null { [] };
    }
  };

  public func addToWishlist(wishlists : WishlistMap, caller : Principal, productId : Nat) {
    switch (wishlists.get(caller)) {
      case (?wish) {
        wish.add(productId);
      };
      case null {
        let wish = Set.empty<Nat>();
        wish.add(productId);
        wishlists.add(caller, wish);
      };
    }
  };

  public func removeFromWishlist(wishlists : WishlistMap, caller : Principal, productId : Nat) {
    switch (wishlists.get(caller)) {
      case (?wish) {
        wish.remove(productId);
      };
      case null {};
    }
  };
};
