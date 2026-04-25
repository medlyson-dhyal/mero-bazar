import Map "mo:core/Map";
import Set "mo:core/Set";
import WishlistLib "../lib/wishlist";

mixin (wishlists : Map.Map<Principal, Set.Set<Nat>>) {
  public shared ({ caller }) func addToWishlist(productId : Nat) : async () {
    WishlistLib.addToWishlist(wishlists, caller, productId)
  };

  public shared ({ caller }) func removeFromWishlist(productId : Nat) : async () {
    WishlistLib.removeFromWishlist(wishlists, caller, productId)
  };

  public shared ({ caller }) func getWishlist() : async [Nat] {
    WishlistLib.getWishlist(wishlists, caller)
  };
};
