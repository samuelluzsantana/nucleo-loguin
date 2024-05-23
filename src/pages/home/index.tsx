// react
import Header from "@/components/Header";
import { Helmet } from "react-helmet";

export default function Home() {
  const pageTitle = "Núcleo Loguin";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <Header>
      Home
      </Header>
    </>
  );
}
