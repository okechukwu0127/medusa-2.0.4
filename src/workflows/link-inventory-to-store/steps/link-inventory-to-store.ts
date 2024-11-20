import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { Modules, ContainerRegistrationKeys } from "@medusajs/framework/utils";

type LinkInventoryToStoreStepInput = {
  inventoryItemId: string;
  storeId: string;
};

export const linkInventoryToStoreStep = createStep(
  "link-inventory-to-store",
  async (
    { inventoryItemId, storeId }: LinkInventoryToStoreStepInput,
    { container }
  ) => {
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK);

    const linkArray = remoteLink.create({
      [Modules.INVENTORY]: {
        inventory_item_id: inventoryItemId,
      },
      [Modules.STORE]: {
        store_id: storeId,
      },
    });

    return new StepResponse(linkArray, {
      inventoryItemId,
      storeId,
    });
  },
  async ({ inventoryItemId, storeId }, { container }) => {
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK);

    remoteLink.dismiss({
      [Modules.INVENTORY]: {
        inventory_item_id: inventoryItemId,
      },
      [Modules.STORE]: {
        store_id: storeId,
      },
    });
  }
);
