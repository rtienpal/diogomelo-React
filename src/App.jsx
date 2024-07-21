import { useState, useEffect } from 'react'
import { Header } from './components/Header/header'
import JsonData from './data/data.json'
import { Footer } from './components/Footer/footer';

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div class="body d-flex flex-column justify-content-between">
      <Header data={landingPageData.Header}/>
      <div class="home-page-content">HOME PAGE CONTENT</div>
      <Footer />
    </div>
  )
}

export default App
