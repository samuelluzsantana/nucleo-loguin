// react
import { Helmet } from "react-helmet";

export default function Home() {
  const pageTitle = "Núcleo Loguin";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="main">home</div>
    </>
  );
}
