import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { Modules, ContainerRegistrationKeys } from "@medusajs/framework/utils";

type LinkInventoryToStoreStepInput = {
  productCategoryId: string;
  storeId: string;
};

export const linkCategoryToStoreStep = createStep(
  "link-category-to-store",
  async (
    { productCategoryId, storeId }: LinkInventoryToStoreStepInput,
    { container }
  ) => {
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK);

    const linkArray = remoteLink.create({
      [Modules.PRODUCT]: {
        product_category_id: productCategoryId,
      },
      [Modules.STORE]: {
        store_id: storeId,
      },
    });

    return new StepResponse(linkArray, {
      productCategoryId,
      storeId,
    });
  },
  async ({ productCategoryId, storeId }, { container }) => {
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK);

    remoteLink.dismiss({
      [Modules.INVENTORY]: {
        product_category_id: productCategoryId,
      },
      [Modules.STORE]: {
        store_id: storeId,
      },
    });
  }
);
