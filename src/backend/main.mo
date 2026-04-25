import Map "mo:core/Map";
import List "mo:core/List";
import Set "mo:core/Set";
import CartTypes "types/cart";
import OrderTypes "types/orders";
import ReviewTypes "types/reviews";
import CatalogApi "mixins/catalog-api";
import CartApi "mixins/cart-api";
import OrdersApi "mixins/orders-api";
import WishlistApi "mixins/wishlist-api";
import ReviewsApi "mixins/reviews-api";

actor {
  let carts = Map.empty<Principal, List.List<CartTypes.CartItem>>();
  let orders = Map.empty<Principal, List.List<OrderTypes.Order>>();
  let nextOrderId : [var Nat] = [var 1];
  let wishlists = Map.empty<Principal, Set.Set<Nat>>();
  let reviews = Map.empty<Nat, List.List<ReviewTypes.Review>>();

  include CatalogApi();
  include CartApi(carts);
  include OrdersApi(orders, carts, nextOrderId);
  include WishlistApi(wishlists);
  include ReviewsApi(reviews);
};
