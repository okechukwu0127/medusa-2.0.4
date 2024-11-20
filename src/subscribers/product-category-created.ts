import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
//import { IProductCategoryService } from "@medusajs/framework/types";
import { Modules } from "@medusajs/framework/utils";
import { linkCategoryToStoreWorkflow } from "src/workflows/link-catgeory-to-store";

export default async function productCategoryCreateHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const categoryId = data.id;

  console.log("product-category.created", { data, container });

  try {
    // Resolve logged-in user
    const loggedInUser = container.resolve("loggedInUser");
    console.log({ loggedInUser });
  } catch (error) {
    console.log({ error });
  }
}

export const config: SubscriberConfig = {
  event: "product-category.created",
};
