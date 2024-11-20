import InventoryModule from "@medusajs/medusa/inventory";
import StoreModule from "@medusajs/medusa/store";
import { defineLink } from "@medusajs/framework/utils";

export default defineLink(
  InventoryModule.linkable.inventoryItem,
  StoreModule.linkable.store
);

/* export default defineLink(InventoryModule.linkable.inventoryItem, {
  linkable: StoreModule.linkable.store,
  isList: true,
}); */
