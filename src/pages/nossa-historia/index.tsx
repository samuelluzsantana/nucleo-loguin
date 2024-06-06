// react
import Header from "@/components/Header";
import { Helmet } from "react-helmet";

export default function NossaHistoria() {
  const pageTitle = "Nossa Historia";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />
      <p>Nossa Historia</p>
    </>
  );
}
