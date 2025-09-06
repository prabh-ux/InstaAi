
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
    </Routes></div>
  );
};

export default App;
