
import { Routes, Route, Link,Router } from "react-router-dom";
import SeoDemo from "./components/SeoDemo";
import HomePage from "./components/HomePage";
import CaptionsSEO from "./components/CaptionSeo";
import HashtagsSEO from "./components/HashtagsSEO";
import BioSEO from "./components/BioSEO";
import NameSEO from "./components/NameSEO";
import TipsPage from "./components/TipsPage";
import FaqPage from "./components/FaqPage";
import hooks from "./hooks/hooks";
import { useEffect } from "react";
import ScrollAtTop from "./components/ScrollAtTop";
import Privacy from "./components/Privacy";
import Conditions from "./components/Conditions";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";





const App = () => {

  

  
  return (
    <div>
     <ScrollAtTop/>
    <Routes>
     
      <Route path="/" element={<HomePage/>} />
      <Route path="/seo-demo" element={<SeoDemo />} />
      <Route path="/captions-seo" element={<CaptionsSEO />} />
      <Route path="/hashtags-seo" element={<HashtagsSEO   />} />
      <Route path="/bio-seo" element={<BioSEO  />} />
      <Route path="/name-seo" element={<NameSEO  />} />
      <Route path="/instagram-tips" element={<TipsPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Conditions />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />




    </Routes></div>
  );
};

export default App;
