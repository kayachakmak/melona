import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://melonadent.com",
      lastModified: new Date(),
    },
  ];
}