// react
import { Helmet } from "react-helmet";
// components
import Header from "@/components/Header";
// page/sections
import HomeContainer from "./sections/HomeContainer";


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
      </main>



    </>
  );
}
