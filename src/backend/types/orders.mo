import Common "common";

module {
  public type OrderItem = {
    productId : Nat;
    quantity : Nat;
    price : Nat;
  };

  public type Order = {
    id : Nat;
    items : [OrderItem];
    total : Nat;
    status : Text;
    createdAt : Common.Timestamp;
  };
};
