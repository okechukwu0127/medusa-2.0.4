import {
  type MedusaNextFunction,
  type MedusaRequest,
  type MedusaResponse,
} from "@medusajs/framework/http";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";
import { UserDTO } from "@medusajs/framework/types";

export async function addStoreIdToFilterableFields(
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction
) {
  try {
    const loggedInUser = req.scope.resolve("loggedInUser") as UserDTO;

    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

    const { data: users } = await query.graph({
      entity: "user",
      fields: ["id", "email", "store.*"],
      filters: {
        id: [loggedInUser?.id],
      },
    });

    //console.log(req.filterableFields, { users });

    const store = users?.[0]?.store;
    //console.log({ store });
    if (store) {
      if (!req.filterableFields) {
        req.filterableFields = {};
      }
      // set 'filterableFields' so then the 'maybeApplyLinkFilter' middleware will process it
      req.filterableFields["store_id"] = store?.id;
    }
  } catch (error) {
    console.log("addStoreIdToFilterableFields", error);
  }

  return next();
}
