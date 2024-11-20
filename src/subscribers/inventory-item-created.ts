import { type SubscriberConfig, type SubscriberArgs } from "@medusajs/medusa";

export default async function handleInventoryItemCreated({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const { id } = data;

  console.log("New inventory item created:", data, container);

  // Add your custom logic here
}

export const config: SubscriberConfig = {
  event: "inventory-item.created",
};
