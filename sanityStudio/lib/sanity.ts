import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "y7ka5oti", // Pegue no sanity.io/manage
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // Garante a performance (cache)
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}