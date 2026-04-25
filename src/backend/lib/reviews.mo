import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import ReviewTypes "../types/reviews";

module {
  public type Review = ReviewTypes.Review;
  public type ReviewsMap = Map.Map<Nat, List.List<Review>>;

  public func getReviews(reviews : ReviewsMap, productId : Nat) : [Review] {
    switch (reviews.get(productId)) {
      case (?productReviews) { productReviews.toArray() };
      case null { [] };
    }
  };

  public func addReview(
    reviews : ReviewsMap,
    caller : Principal,
    productId : Nat,
    rating : Nat,
    reviewText : Text
  ) {
    let review : Review = {
      productId;
      userId = caller;
      rating;
      text = reviewText;
      date = Time.now();
    };

    switch (reviews.get(productId)) {
      case (?productReviews) {
        productReviews.add(review);
      };
      case null {
        let productReviews = List.empty<Review>();
        productReviews.add(review);
        reviews.add(productId, productReviews);
      };
    }
  };
};
