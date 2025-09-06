import React, { useState } from 'react'

const hooks = () => {
  const [activeTab, setActiveTab] = useState("captions");
  const[mood,setMood]=useState("trendy");
  const[location,setLocation]=useState("");
  const [captionTopic,setCaptionTopic]=useState("");
  const [hashtagText,setHashtagText]=useState("");
  const [reelDescription,setReelDescription]=useState("");
  const [bioText,setBioText]=useState("");
  const [nameTopic,setNameTopic]=useState("");
  const [userName,setUserName]=useState("");
  

  return {activeTab,setActiveTab,mood,setMood,location,setLocation,captionTopic,setCaptionTopic,
    hashtagText,setHashtagText,reelDescription,setReelDescription,bioText,setBioText,nameTopic,setNameTopic
    ,userName,setUserName
  }
}

export default hooks