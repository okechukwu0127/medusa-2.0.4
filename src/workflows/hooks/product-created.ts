import {
  createProductsWorkflow,
  //  updateProductsWorkflow,
} from "@medusajs/medusa/core-flows";
import { UserDTO } from "@medusajs/framework/types";
import { linkProductToStoreWorkflow } from "../link-product-to-store";

createProductsWorkflow.hooks.productsCreated(
  async ({ products }, { container }) => {
    try {
      console.log({ products });
      console.log("HOOK productsCreated", products?.[0]?.id);

      const loggedInUser = container.resolve("loggedInUser") as UserDTO;

      await linkProductToStoreWorkflow(container).run({
        input: {
          productId: products?.[0]?.id,
          userId: loggedInUser?.id,
        },
      });
    } catch (error) {
      console.log("productsCreated", error);
    }
  }
);
