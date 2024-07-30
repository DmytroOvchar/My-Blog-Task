import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("sign_up");
  console.log(page)

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("sign_up");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

// export default async function Index() {
//   // The client queries content from the Prismic API
//   const client = createClient();
//   const home = await client.getByUID("page", "home");
//   console.log("HOME PAGE!!");

//   return <SliceZone slices={home.data.slices} components={components} />;
// }
