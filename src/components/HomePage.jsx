import React from 'react'
import { useState, useEffect } from "react";

import Tabs from "../components/Tabs";
import CommonInputs from "../components/CommonInputs";
import Captions from "../components/Captions";
import Hashtag from "../components/Hashtag";
import Bio from "../components/Bio";
import Name from "../components/Name";
import Output from "../components/Output";
import Seo from "../components/Seo";
import ErrorComp from "../components/ErrorComp";

import hooks from "../hooks/hooks";
import useInstaAi from "../components/useInstaAi";
import { Link, useLocation } from 'react-router-dom';



const HomePage = () => {
    const { activeTab, setActiveTab, mood, setMood, location, setLocation, captionTopic, setCaptionTopic,
        hashtagText, setHashtagText, reelDescription, setReelDescription, bioText, setBioText, nameTopic, setNameTopic,
        userName, setUserName } = hooks();

    const { handleGenerate, caption, hashtags, name, bio, loading, errors, setErrors } = useInstaAi({
        mood, location, captionTopic, hashtagText, reelDescription, bioText, nameTopic, userName
    });
    const locationn = useLocation();


    useEffect(() => { setErrors(null); }, [activeTab]);
    useEffect(() => {
        if (locationn.state?.tab) {
            setActiveTab(locationn.state?.tab);
        }
    }, [locationn.state?.tab])
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4">
            <div className="w-full max-w-xl space-y-6 bg-gray-850 rounded-3xl shadow-2xl p-6 sm:p-8">
                <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    InstaAI
                </h1>

                <div className="text-center mt-2">
                    <Link
                        to="/seo-demo"
                        className="text-purple-400 hover:text-purple-600 underline font-medium"
                    >
                        Learn more about our AI Instagram tools
                    </Link>
                </div>





                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <CommonInputs mood={mood} setMood={setMood} location={location} setLocation={setLocation} />

                {activeTab === "captions" && <Captions handleGenerate={handleGenerate} captionTopic={captionTopic} setCaptionTopic={setCaptionTopic} loading={loading} />}
                {activeTab === "hashtags" && <Hashtag loading={loading} handleGenerate={handleGenerate} hashtagText={hashtagText} setHashtagText={setHashtagText} reelDescription={reelDescription} setReelDescription={setReelDescription} />}
                {activeTab === "bio" && <Bio handleGenerate={handleGenerate} loading={loading} bioText={bioText} setBioText={setBioText} />}
                {activeTab === "name" && <Name handleGenerate={handleGenerate} loading={loading} nameTopic={nameTopic} setNameTopic={setNameTopic} userName={userName} setUserName={setUserName} />}

                <Output caption={caption} hashtags={hashtags} name={name} activeTab={activeTab} bio={bio} />
                {errors && <ErrorComp errors={errors} />}
                <Seo activeTab={activeTab} />
                <div className="text-center mt-4 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2">
                    <Link
                        to="/captions-seo"
                        className="text-purple-400 underline hover:text-purple-600 px-2 py-1"
                    >
                        Generate AI Instagram Captions
                    </Link>
                    <Link
                        to="/hashtags-seo"
                        className="text-purple-400 underline hover:text-purple-600 px-2 py-1"
                    >
                        Generate AI Instagram Hashtags
                    </Link>
                    <Link
                        to="/bio-seo"
                        className="text-purple-400 underline hover:text-purple-600 px-2 py-1"
                    >
                        Generate AI Instagram Bio Ideas
                    </Link>
                    <Link
                        to="/name-seo"
                        className="text-purple-400 underline hover:text-purple-600 px-2 py-1"
                    >
                        Generate AI Instagram Name Ideas
                    </Link>
                    <Link
                        to="/instagram-tips"
                        className="text-purple-400 hover:text-purple-600 underline"
                    >
                        Instagram Growth Tips & Blog
                    </Link>
                    <Link
                        to="/faq"
                        className="text-purple-400 hover:text-purple-600 underline"
                    >
                        Frequently Asked Questions (FAQ)
                    </Link>


                </div>
                <div className="text-center mt-4 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2">
                    <Link to="/privacy" className="text-gray-400 hover:underline">Privacy Policy</Link>
                    <Link to="/terms" className="text-gray-400 hover:underline">
                        Terms & Conditions
                    </Link>
                    <Link to="/about" className="text-gray-400 hover:underline">
                        About Us
                    </Link>
<Link to="/contact" className="text-gray-400 hover:underline">
  Contact Us
</Link>
                </div>
            </div>
        </main>
    );
};

export default HomePage