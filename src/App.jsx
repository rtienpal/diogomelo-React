import { useState, useEffect } from "react";
import { Header } from "./components/Header/header";
import JsonData from "./data/data.json";
import { Footer } from "./components/Footer/footer";
import Banner from "./components/Content/banner";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="body d-flex flex-column justify-content-between">
      <Header data={landingPageData.Header} />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
