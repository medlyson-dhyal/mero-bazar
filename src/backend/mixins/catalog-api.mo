import CatalogLib "../lib/catalog";
import CatalogTypes "../types/catalog";

mixin () {
  public query func getProducts() : async [CatalogTypes.Product] {
    CatalogLib.getAllProducts()
  };

  public query func getProductById(id : Nat) : async ?CatalogTypes.Product {
    CatalogLib.getProductById(id)
  };

  public query func getProductsByCategory(category : Text) : async [CatalogTypes.Product] {
    CatalogLib.getProductsByCategory(category)
  };

  public query func searchProducts(searchQuery : Text) : async [CatalogTypes.Product] {
    CatalogLib.searchProducts(searchQuery)
  };

  public query func getCategories() : async [Text] {
    CatalogLib.getCategories()
  };
};
