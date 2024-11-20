/* import {
  createProductCategoriesWorkflow,
  createInventoryItemsWorkflow,
} from "@medusajs/medusa/core-flows";
import { UserDTO } from "@medusajs/framework/types";
import { linkCategoryToStoreWorkflow } from "../link-catgeory-to-store";


createProductCategoriesWorkflow.hooks.productCategoriesCreated(
  async ({ product_categories }, { container }) => {
    try {
      console.log({ product_categories });
      console.log("HOOK productCategoriesCreated", product_categories?.[0]?.id);

      const loggedInUser = container.resolve("loggedInUser") as UserDTO;

      await linkCategoryToStoreWorkflow(container).run({
        input: {
          productCategoryId: product_categories?.[0]?.id,
          userId: loggedInUser?.id,
        },
      });
    } catch (error) {
      console.log("productCategoriesCreated", error);
    }
  }
);
 */