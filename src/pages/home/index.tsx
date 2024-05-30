// react
import { Helmet } from "react-helmet";
// components
import Header from "@/components/Header";
// page/sections
import HomeContainer from "./sections/HomeContainer";
import NossosParceiros from "./sections/NossosParceiros";


export default function Home() {
  const pageTitle = "Núcleo Loguin";


  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <Header />

      <main>
        <HomeContainer />
        <NossosParceiros />
      </main>



    </>
  );
}
