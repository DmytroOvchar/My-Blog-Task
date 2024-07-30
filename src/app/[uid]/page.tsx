import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  let page = null;

  try {
    page = await client.getSingle("sign_up");
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }

  if (!page) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Page() {
  const client = createClient();
  let page = null;

  try {
    page = await client.getSingle("sign_up");
  } catch (error) {
    console.error("Error fetching page data:", error);
  }

  if (!page) {
    return <div>Page not found or failed to load.</div>;
  }

  return <SliceZone slices={page.data.slices} components={components} />;
}
