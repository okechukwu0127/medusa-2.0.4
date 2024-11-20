import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import { linkInventoryToStoreStep } from "./steps/link-inventory-to-store";
import { getStoreStep } from "../link-product-to-store/steps/get-store";
export type LinkInventoryToStoreInput = {
  inventoryItemId: string;
  userId: string;
};

export const linkInventoryToStoreWorkflow = createWorkflow(
  "link-inventory-to-store",
  (input: LinkInventoryToStoreInput) => {
    const { store } = getStoreStep(input.userId);

    const inventoryStoreLinkArray = linkInventoryToStoreStep({
      inventoryItemId: input.inventoryItemId,
      storeId: store.id,
    });

    return new WorkflowResponse({
      inventoryStoreLinkArray,
      store,
    });
  }
);
