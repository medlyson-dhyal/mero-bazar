module {
  public type Product = {
    id : Nat;
    title : Text;
    description : Text;
    price : Nat;
    originalPrice : Nat;
    discountPercent : Nat;
    rating : Nat;
    reviewCount : Nat;
    images : [Text];
    category : Text;
    sellerId : Text;
    inStock : Bool;
    specs : [(Text, Text)];
    tags : [Text];
  };
};
