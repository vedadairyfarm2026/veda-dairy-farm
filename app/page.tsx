import { HomePage } from "@/features/home/components/home-page";

import { homeDescription, homeTitle, pageMetadata } from "@/config/seo";
import { PageStructuredData } from "@/features/seo/components/structured-data";

export const metadata = pageMetadata(homeTitle, homeDescription, "/");

export default function Home() {
  return <><PageStructuredData title={homeTitle} description={homeDescription} path="/" /><HomePage /></>;
}
