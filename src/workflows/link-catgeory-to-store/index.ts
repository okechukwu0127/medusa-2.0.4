import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import { linkCategoryToStoreStep } from "./steps/link-category-to-store";
import { getStoreStep } from "../link-product-to-store/steps/get-store";
export type LinkCategoryToStoreInput = {
  productCategoryId: string;
  userId: string;
};

export const linkCategoryToStoreWorkflow = createWorkflow(
  "link-category-to-store",
  (input: LinkCategoryToStoreInput) => {
    const { store } = getStoreStep(input.userId);

    const categoryStoreLinkArray = linkCategoryToStoreStep({
      productCategoryId: input.productCategoryId,
      storeId: store.id,
    });

    return new WorkflowResponse({
      categoryStoreLinkArray,
      store,
    });
  }
);
