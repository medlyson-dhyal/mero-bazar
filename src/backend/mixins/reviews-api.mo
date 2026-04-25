import Map "mo:core/Map";
import List "mo:core/List";
import ReviewTypes "../types/reviews";
import ReviewsLib "../lib/reviews";

mixin (reviews : Map.Map<Nat, List.List<ReviewTypes.Review>>) {
  public shared ({ caller }) func addReview(productId : Nat, rating : Nat, reviewText : Text) : async () {
    ReviewsLib.addReview(reviews, caller, productId, rating, reviewText)
  };

  public query func getReviews(productId : Nat) : async [ReviewTypes.Review] {
    ReviewsLib.getReviews(reviews, productId)
  };
};
