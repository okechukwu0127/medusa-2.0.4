import ProductCategoryModule from "@medusajs/medusa/product";
import StoreModule from "@medusajs/medusa/store";
import { defineLink } from "@medusajs/framework/utils";

/* export default defineLink(ProductCategoryModule.linkable.productCategory, {
  linkable: StoreModule.linkable.store,
  isList: true,
}); */

export default defineLink(
  ProductCategoryModule.linkable.productCategory,
  StoreModule.linkable.store
);
