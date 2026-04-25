import Common "common";

module {
  public type Review = {
    productId : Nat;
    userId : Common.UserId;
    rating : Nat;
    text : Text;
    date : Common.Timestamp;
  };
};
